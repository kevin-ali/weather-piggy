import requests
from datetime import datetime

WMO_CODES = {
    0: ("Clear sky", "☀️"),
    1: ("Mainly clear", "🌤️"),
    2: ("Partly cloudy", "⛅"),
    3: ("Overcast", "☁️"),
    45: ("Foggy", "🌫️"),
    48: ("Rime fog", "🌫️"),
    51: ("Light drizzle", "🌦️"),
    53: ("Drizzle", "🌦️"),
    55: ("Dense drizzle", "🌦️"),
    56: ("Freezing drizzle", "🌧️"),
    57: ("Heavy freezing drizzle", "🌧️"),
    61: ("Light rain", "🌧️"),
    63: ("Rain", "🌧️"),
    65: ("Heavy rain", "🌧️"),
    66: ("Freezing rain", "🌧️"),
    67: ("Heavy freezing rain", "🌧️"),
    71: ("Light snow", "🌨️"),
    73: ("Snow", "🌨️"),
    75: ("Heavy snow", "🌨️"),
    77: ("Snow grains", "🌨️"),
    80: ("Light showers", "🌦️"),
    81: ("Showers", "🌧️"),
    82: ("Heavy showers", "🌧️"),
    85: ("Light snow showers", "🌨️"),
    86: ("Heavy snow showers", "🌨️"),
    95: ("Thunderstorm", "⛈️"),
    96: ("Thunderstorm with hail", "⛈️"),
    99: ("Severe thunderstorm", "⛈️"),
}

PIGGY_COMMENTS = {
    0: "Sunglasses on, snout out! 😎",
    1: "Almost perfect piggy weather!",
    2: "A few clouds to keep my ears cool.",
    3: "The sky is wearing a blanket, just like me.",
    45: "Can't see my own snout in this fog!",
    48: "Frosty fog — my curly tail is frozen!",
    51: "Just a light sprinkle on my snout.",
    53: "Drizzle drizzle — puddle splashing time!",
    55: "Getting properly soggy out there.",
    61: "Oink! Grab an umbrella!",
    63: "Rainy day = mud bath day! 🐷",
    65: "Bucketing down! Even pigs stay inside.",
    71: "Snow! Time to make pig-angels! ❄️",
    73: "Snowy snout reporting for duty.",
    75: "Heavy snow — I'm basically a snowpig now.",
    80: "Surprise showers! My tail is a weather vane.",
    81: "Showery and splashy!",
    95: "Thunder! Hide behind the biggest pig!",
    96: "Yikes! Hail and thunder — full piggy panic!",
}


def _decode_wmo(code):
    desc, icon = WMO_CODES.get(code, ("Unknown", "❓"))
    return desc, icon


def _piggy_comment(code):
    if code in PIGGY_COMMENTS:
        return PIGGY_COMMENTS[code]
    for key in sorted(PIGGY_COMMENTS.keys()):
        if abs(key - code) <= 2:
            return PIGGY_COMMENTS[key]
    return "The piggy is confused by this weather. 🤔"


def _uv_label(uv):
    if uv <= 2:
        return "Low"
    if uv <= 5:
        return "Moderate"
    if uv <= 7:
        return "High"
    if uv <= 10:
        return "Very High"
    return "Extreme"


def get_weather(city: str) -> dict | None:
    try:
        geo = requests.get(
            "https://geocoding-api.open-meteo.com/v1/search",
            params={"name": city, "count": 1, "language": "en"},
            timeout=10,
        ).json()

        if "results" not in geo or not geo["results"]:
            return None

        loc = geo["results"][0]
        lat, lon = loc["latitude"], loc["longitude"]
        city_name = loc["name"]
        country = loc.get("country", "")

        weather = requests.get(
            "https://api.open-meteo.com/v1/forecast",
            params={
                "latitude": lat,
                "longitude": lon,
                "current": "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,apparent_temperature,cloud_cover,pressure_msl,wind_gusts_10m,is_day",
                "hourly": "temperature_2m,weather_code,precipitation_probability",
                "daily": "weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,wind_speed_10m_max",
                "timezone": "auto",
                "forecast_days": 7,
            },
            timeout=10,
        ).json()

        cur = weather["current"]
        cur_desc, cur_icon = _decode_wmo(cur["weather_code"])

        # Get today's daily data for sunrise/sunset/UV
        today_daily = {
            "sunrise": weather["daily"]["sunrise"][0],
            "sunset": weather["daily"]["sunset"][0],
            "uv_index": weather["daily"]["uv_index_max"][0],
        }

        sunrise_dt = datetime.fromisoformat(today_daily["sunrise"])
        sunset_dt = datetime.fromisoformat(today_daily["sunset"])

        current = {
            "temperature": round(cur["temperature_2m"]),
            "feels_like": round(cur["apparent_temperature"]),
            "humidity": cur["relative_humidity_2m"],
            "wind_speed": round(cur["wind_speed_10m"]),
            "wind_gusts": round(cur["wind_gusts_10m"]),
            "cloud_cover": cur["cloud_cover"],
            "pressure": round(cur["pressure_msl"]),
            "is_day": cur["is_day"],
            "weather_code": cur["weather_code"],
            "description": cur_desc,
            "icon": cur_icon,
            "sunrise": sunrise_dt.strftime("%-I:%M %p"),
            "sunset": sunset_dt.strftime("%-I:%M %p"),
            "uv_index": round(today_daily["uv_index"]),
            "uv_label": _uv_label(today_daily["uv_index"]),
            "piggy_says": _piggy_comment(cur["weather_code"]),
        }

        hourly = []
        now = datetime.fromisoformat(cur["time"])
        for i, t in enumerate(weather["hourly"]["time"]):
            dt = datetime.fromisoformat(t)
            if dt < now:
                continue
            if len(hourly) >= 24:
                break
            desc, icon = _decode_wmo(weather["hourly"]["weather_code"][i])
            hourly.append({
                "time": dt.strftime("%-I %p"),
                "temperature": round(weather["hourly"]["temperature_2m"][i]),
                "icon": icon,
                "description": desc,
                "precip_prob": weather["hourly"]["precipitation_probability"][i] or 0,
            })

        daily = []
        for i, t in enumerate(weather["daily"]["time"]):
            dt = datetime.fromisoformat(t)
            desc, icon = _decode_wmo(weather["daily"]["weather_code"][i])
            sr = datetime.fromisoformat(weather["daily"]["sunrise"][i])
            ss = datetime.fromisoformat(weather["daily"]["sunset"][i])
            daily.append({
                "date": dt.strftime("%a"),
                "date_full": dt.strftime("%b %-d"),
                "temp_max": round(weather["daily"]["temperature_2m_max"][i]),
                "temp_min": round(weather["daily"]["temperature_2m_min"][i]),
                "icon": icon,
                "description": desc,
                "uv_index": round(weather["daily"]["uv_index_max"][i]),
                "uv_label": _uv_label(weather["daily"]["uv_index_max"][i]),
                "precip_sum": round(weather["daily"]["precipitation_sum"][i], 1),
                "wind_max": round(weather["daily"]["wind_speed_10m_max"][i]),
                "sunrise": sr.strftime("%-I:%M %p"),
                "sunset": ss.strftime("%-I:%M %p"),
            })

        return {
            "city": city_name,
            "country": country,
            "current": current,
            "hourly": hourly,
            "daily": daily,
        }
    except Exception:
        return None
