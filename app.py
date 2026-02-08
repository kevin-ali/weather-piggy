from flask import Flask, render_template, request
from weather_api import get_weather

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/weather", methods=["POST"])
def weather():
    city = request.form.get("city", "").strip()
    if not city:
        return render_template("index.html", error="Please enter a city name.")

    data = get_weather(city)
    if data is None:
        return render_template(
            "index.html",
            error=f"Could not find weather for '{city}'. Check the spelling and try again.",
        )

    # Precompute temp range for the daily bar chart
    all_mins = [d["temp_min"] for d in data["daily"]]
    all_maxs = [d["temp_max"] for d in data["daily"]]
    range_min = min(all_mins)
    range_span = max(1, max(all_maxs) - range_min)
    for d in data["daily"]:
        d["bar_left"] = round((d["temp_min"] - range_min) / range_span * 100)
        d["bar_width"] = round((d["temp_max"] - d["temp_min"]) / range_span * 100)

    return render_template("weather.html", w=data)


if __name__ == "__main__":
    app.run(debug=True)
