# 🐷 Weather Piggy

Your snout-to-cloud weather companion. A Flask web app that delivers current conditions, 24-hour hourly forecasts, and 7-day daily forecasts with a whimsical pig-themed UI.

*"Because even pigs check the forecast before rolling in mud."*

## Features

- **Current conditions** — temperature, feels like, humidity, wind speed & gusts, cloud cover, pressure, UV index
- **Sunrise & sunset** times
- **24-hour hourly forecast** — temperature and precipitation probability
- **7-day daily forecast** — high/low temps with visual range bars, UV index, precipitation totals
- **Piggy commentary** — weather-specific quips from the piggy himself
- No API keys required — powered by [Open-Meteo](https://open-meteo.com/)

## Setup

```bash
pip install -r requirements.txt
python app.py
```

Then visit [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Tech Stack

- **Backend**: Python, Flask
- **API**: Open-Meteo (free, no key required)
- **Frontend**: Jinja2 templates with inline CSS
