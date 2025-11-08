"use client";

import { Card } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export default function Market() {
  const priceData = [
    { crop: "Wheat", price: 2400, change: 5.2 },
    { crop: "Rice", price: 2800, change: -2.1 },
    { crop: "Cotton", price: 5200, change: 8.5 },
    { crop: "Sugarcane", price: 3100, change: 3.2 },
    { crop: "Corn", price: 1900, change: -1.5 },
  ];

  const trendData = [
    { month: "Jan", wheat: 2200, rice: 2600, cotton: 4800 },
    { month: "Feb", wheat: 2300, rice: 2700, cotton: 4900 },
    { month: "Mar", wheat: 2350, rice: 2750, cotton: 5000 },
    { month: "Apr", wheat: 2400, rice: 2800, cotton: 5100 },
    { month: "May", wheat: 2450, rice: 2850, cotton: 5200 },
    { month: "Jun", wheat: 2400, rice: 2800, cotton: 5200 },
  ];

  const marketInsights = [
    {
      title: "Best Selling Time",
      value: "July - August",
      description: "Peak demand for wheat and rice",
    },
    {
      title: "Price Volatility",
      value: "Medium",
      description: "Stable market conditions expected",
    },
    {
      title: "Demand Trend",
      value: "↑ Increasing",
      description: "Cotton demand rising globally",
    },
  ];

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-linear-to-br from-purple-100 to-pink-100 p-3 rounded-lg">
              <DollarSign className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Market Intelligence</h1>
          </div>
          <p className="text-xl text-slate-600">
            Live market prices and trend analysis for better selling decisions
          </p>
        </div>

        {/* Current Prices */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Current Crop Prices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {priceData.map((item, idx) => (
              <Card key={idx} className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                <p className="text-sm text-slate-600 mb-2">{item.crop}</p>
                <p className="text-3xl font-bold text-slate-900 mb-3">
                  ₹{item.price}
                </p>
                <div
                  className={`flex items-center gap-2 ${
                    item.change > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {item.change > 0 ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span className="font-semibold">{Math.abs(item.change)}%</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Price Trends Chart */}
        <Card className="p-8 mb-8 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Price Trends (6 Months)</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="wheat" stroke="#8b5cf6" strokeWidth={2} />
              <Line type="monotone" dataKey="rice" stroke="#06b6d4" strokeWidth={2} />
              <Line type="monotone" dataKey="cotton" stroke="#ec4899" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Market Insights */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {marketInsights.map((insight, idx) => (
            <Card key={idx} className="p-6 border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100">
              <p className="text-sm text-slate-600 mb-2">{insight.title}</p>
              <p className="text-3xl font-bold text-slate-900 mb-2">{insight.value}</p>
              <p className="text-slate-600">{insight.description}</p>
            </Card>
          ))}
        </div>

        {/* Recommendations */}
        <Card className="p-8 border-slate-200 bg-blue-50">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Market Recommendations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Best Crops to Sell Now
              </h4>
              <ul className="space-y-2">
                <li className="text-slate-700">• Cotton - 8.5% price increase</li>
                <li className="text-slate-700">• Wheat - 5.2% price increase</li>
                <li className="text-slate-700">• Sugarcane - 3.2% price increase</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-red-600" />
                Hold or Wait
              </h4>
              <ul className="space-y-2">
                <li className="text-slate-700">• Rice - 2.1% price decrease</li>
                <li className="text-slate-700">• Corn - 1.5% price decrease</li>
                <li className="text-slate-700">• Wait for better rates next month</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Price Comparison */}
        <Card className="p-8 mt-8 border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Price Comparison by Region</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={priceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="crop" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </main>
  );
}
