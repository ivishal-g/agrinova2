"use client";

import { Card } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, AlertTriangle } from "lucide-react";

export default function Weather() {
  const weatherData = {
    current: {
      temp: 28,
      condition: "Partly Cloudy",
      humidity: 65,
      windSpeed: 12,
      visibility: 10,
      pressure: 1013,
    },
    forecast: [
      { day: "Today", high: 32, low: 22, condition: "Sunny", icon: Sun },
      { day: "Tomorrow", high: 30, low: 20, condition: "Cloudy", icon: Cloud },
      { day: "Day 3", high: 28, low: 18, condition: "Rainy", icon: CloudRain },
      { day: "Day 4", high: 29, low: 19, condition: "Sunny", icon: Sun },
      { day: "Day 5", high: 31, low: 21, condition: "Sunny", icon: Sun },
    ],
    alerts: [
      { type: "warning", message: "Heavy rainfall expected in next 48 hours" },
      { type: "info", message: "Optimal conditions for irrigation today" },
    ],
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-linear-to-br from-blue-100 to-cyan-100 p-3 rounded-lg">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Weather Insights</h1>
          </div>
          <p className="text-xl text-slate-600">
            Real-time weather forecasts and climate alerts for your farm
          </p>
        </div>

        {/* Current Weather */}
        <Card className="p-8 mb-8 border-slate-200 bg-linear-to-br from-blue-50 to-cyan-50">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Current Weather</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Sun className="w-20 h-20 text-yellow-500" />
                <div>
                  <p className="text-6xl font-bold text-slate-900">
                    {weatherData.current.temp}°C
                  </p>
                  <p className="text-xl text-slate-600">
                    {weatherData.current.condition}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-5 h-5 text-blue-600" />
                  <p className="text-sm text-slate-600">Humidity</p>
                </div>
                <p className="text-2xl font-bold text-slate-900">
                  {weatherData.current.humidity}%
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="w-5 h-5 text-blue-600" />
                  <p className="text-sm text-slate-600">Wind Speed</p>
                </div>
                <p className="text-2xl font-bold text-slate-900">
                  {weatherData.current.windSpeed} km/h
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <p className="text-sm text-slate-600">Visibility</p>
                </div>
                <p className="text-2xl font-bold text-slate-900">
                  {weatherData.current.visibility} km
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-slate-200">
                <p className="text-sm text-slate-600 mb-2">Pressure</p>
                <p className="text-2xl font-bold text-slate-900">
                  {weatherData.current.pressure} mb
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Alerts */}
        <div className="mb-8 space-y-3">
          {weatherData.alerts.map((alert, idx) => (
            <Card
              key={idx}
              className={`p-4 border-l-4 flex items-start gap-4 ${
                alert.type === "warning"
                  ? "bg-yellow-50 border-l-yellow-500"
                  : "bg-blue-50 border-l-blue-500"
              }`}
            >
              <AlertTriangle
                className={`w-6 h-6 shrink-0 ${
                  alert.type === "warning" ? "text-yellow-600" : "text-blue-600"
                }`}
              />
              <p
                className={`${
                  alert.type === "warning" ? "text-yellow-900" : "text-blue-900"
                }`}
              >
                {alert.message}
              </p>
            </Card>
          ))}
        </div>

        {/* 5-Day Forecast */}
        <Card className="p-8 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">5-Day Forecast</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {weatherData.forecast.map((day, idx) => {
              const IconComponent = day.icon;
              return (
                <div
                  key={idx}
                  className="bg-linear-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200 text-center hover:shadow-lg transition-shadow"
                >
                  <p className="font-bold text-slate-900 mb-3">{day.day}</p>
                  <IconComponent className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                  <p className="text-sm text-slate-600 mb-3">{day.condition}</p>
                  <div className="flex justify-center gap-3">
                    <div>
                      <p className="text-xs text-slate-500">High</p>
                      <p className="font-bold text-slate-900">{day.high}°</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Low</p>
                      <p className="font-bold text-slate-900">{day.low}°</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Farming Tips */}
        <Card className="p-8 mt-8 border-slate-200 bg-green-50">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Weather-Based Farming Tips</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-slate-700">
              <span className="text-green-600 font-bold">•</span>
              <span>Avoid irrigation today - humidity is high at 65%</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <span className="text-green-600 font-bold">•</span>
              <span>Prepare for rainfall in next 48 hours - secure loose items</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <span className="text-green-600 font-bold">•</span>
              <span>Wind speed is moderate - good day for pesticide application</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <span className="text-green-600 font-bold">•</span>
              <span>Temperature is optimal for most crop growth</span>
            </li>
          </ul>
        </Card>
      </div>
    </main>
  );
}
