"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Droplet, Leaf, AlertCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function FarmPlan() {
  const sensorData = [
    { time: "6 AM", moisture: 45, temperature: 18, humidity: 72 },
    { time: "9 AM", moisture: 52, temperature: 22, humidity: 65 },
    { time: "12 PM", moisture: 58, temperature: 28, humidity: 55 },
    { time: "3 PM", moisture: 62, temperature: 32, humidity: 48 },
    { time: "6 PM", moisture: 55, temperature: 26, humidity: 60 },
    { time: "9 PM", moisture: 48, temperature: 20, humidity: 70 },
  ];

  const iotDevices = [
    {
      name: "Soil Moisture Sensor",
      status: "Active",
      value: "62%",
      location: "Field A",
      battery: 85,
    },
    {
      name: "Temperature Sensor",
      status: "Active",
      value: "28°C",
      location: "Field B",
      battery: 92,
    },
    {
      name: "Humidity Sensor",
      status: "Active",
      value: "55%",
      location: "Field A",
      battery: 78,
    },
    {
      name: "Weather Station",
      status: "Active",
      value: "12 km/h",
      location: "Farm Center",
      battery: 88,
    },
  ];

  const schedule = [
    {
      task: "Irrigation",
      time: "6:00 AM",
      duration: "2 hours",
      field: "Field A",
      status: "Scheduled",
    },
    {
      task: "Pesticide Spray",
      time: "4:00 PM",
      duration: "1.5 hours",
      field: "Field B",
      status: "Scheduled",
    },
    {
      task: "Fertilizer Application",
      time: "Tomorrow 8:00 AM",
      duration: "3 hours",
      field: "Field A & B",
      status: "Pending",
    },
  ];

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-linear-to-br from-yellow-100 to-orange-100 p-3 rounded-lg">
              <Zap className="w-8 h-8 text-yellow-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Smart Farm Plan</h1>
          </div>
          <p className="text-xl text-slate-600">
            IoT-enabled farm monitoring and automated scheduling
          </p>
        </div>

        {/* IoT Devices Status */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">IoT Devices Status</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {iotDevices.map((device, idx) => (
              <Card key={idx} className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{device.name}</p>
                    <p className="text-xs text-slate-600">{device.location}</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-900 text-xs font-bold rounded">
                    {device.status}
                  </span>
                </div>
                <p className="text-2xl font-bold text-slate-900 mb-3">{device.value}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">Battery</span>
                  <div className="w-16 bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: `${device.battery}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Real-time Monitoring */}
        <Card className="p-8 mb-8 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Real-time Farm Monitoring</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={sensorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="moisture"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Soil Moisture (%)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="temperature"
                stroke="#f59e0b"
                strokeWidth={2}
                name="Temperature (°C)"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Alerts */}
        <div className="mb-8 space-y-3">
          <Card className="p-4 border-l-4 border-l-yellow-500 bg-yellow-50 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900">Soil Moisture Alert</p>
              <p className="text-sm text-yellow-800">
                Soil moisture in Field A is at 62%. Irrigation recommended within 2 hours.
              </p>
            </div>
          </Card>
          <Card className="p-4 border-l-4 border-l-blue-500 bg-blue-50 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900">Weather Update</p>
              <p className="text-sm text-blue-800">
                Light rain expected in 6 hours. Consider postponing pesticide application.
              </p>
            </div>
          </Card>
        </div>

        {/* Farm Schedule */}
        <Card className="p-8 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Farm Schedule</h2>
          <div className="space-y-4">
            {schedule.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="bg-linear-to-br from-green-100 to-emerald-100 p-3 rounded-lg">
                    {item.task === "Irrigation" ? (
                      <Droplet className="w-6 h-6 text-green-600" />
                    ) : item.task === "Pesticide Spray" ? (
                      <AlertCircle className="w-6 h-6 text-green-600" />
                    ) : (
                      <Leaf className="w-6 h-6 text-green-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900">{item.task}</p>
                    <p className="text-sm text-slate-600">
                      {item.time} • {item.duration} • {item.field}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                    item.status === "Scheduled"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-yellow-100 text-yellow-900"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
          <Button className="w-full mt-6 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3">
            Add New Task
          </Button>
        </Card>

        {/* Recommendations */}
        <Card className="p-8 mt-8 border-slate-200 bg-green-50">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Smart Recommendations</h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-slate-700">
              <span className="text-green-600 font-bold">✓</span>
              <span>Soil moisture is optimal for crop growth. Continue current irrigation schedule.</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <span className="text-green-600 font-bold">✓</span>
              <span>Temperature is ideal for pesticide application. Best time is 4-6 PM.</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <span className="text-green-600 font-bold">✓</span>
              <span>Humidity levels are good. No immediate risk of fungal diseases.</span>
            </li>
            <li className="flex gap-3 text-slate-700">
              <span className="text-green-600 font-bold">✓</span>
              <span>Fertilizer application scheduled optimally for nutrient absorption.</span>
            </li>
          </ul>
        </Card>
      </div>
    </main>
  );
}
