/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Leaf, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function CropAdvisor() {
  const [formData, setFormData] = useState({
    soilType: "",
    soilPH: "",
    rainfall: "",
    temperature: "",
    region: "",
  });

  const [recommendation, setRecommendation] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const crops = {
    loamy: ["Wheat", "Rice", "Corn", "Soybeans"],
    clay: ["Rice", "Cotton", "Sugarcane"],
    sandy: ["Peanuts", "Watermelon", "Millet"],
    alluvial: ["Wheat", "Rice", "Sugarcane", "Cotton"],
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      const soilType = formData.soilType as keyof typeof crops;
      const recommendedCrops = crops[soilType] || ["Wheat", "Rice"];
      const rainfall = parseInt(formData.rainfall);
      const temp = parseInt(formData.temperature);

      const recommendation = {
        crops: recommendedCrops,
        yield: Math.round(Math.random() * 40 + 60),
        profitability: Math.round(Math.random() * 30 + 70),
        waterNeeded: rainfall > 1000 ? "Low" : "High",
        bestSeason: temp > 25 ? "Summer" : "Winter",
        tips: [
          "Prepare soil 2-3 weeks before planting",
          "Use certified seeds for better yield",
          "Monitor soil moisture regularly",
          "Apply organic fertilizers for sustainable farming",
        ],
      };

      setRecommendation(recommendation);
      setLoading(false);
      toast.success("Crop analysis complete!");
    }, 1500);
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-linear-to-br from-green-100 to-emerald-100 p-3 rounded-lg">
              <Leaf className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Smart Crop Advisor</h1>
          </div>
          <p className="text-xl text-slate-600">
            Get AI-powered crop recommendations based on your farm conditions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="p-8 border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Farm Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="soilType" className="text-slate-700 font-semibold">
                  Soil Type
                </Label>
                <Select
                  value={formData.soilType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, soilType: value })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="loamy">Loamy</SelectItem>
                    <SelectItem value="clay">Clay</SelectItem>
                    <SelectItem value="sandy">Sandy</SelectItem>
                    <SelectItem value="alluvial">Alluvial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="soilPH" className="text-slate-700 font-semibold">
                  Soil pH Level
                </Label>
                <Input
                  id="soilPH"
                  type="number"
                  step="0.1"
                  placeholder="6.5"
                  value={formData.soilPH}
                  onChange={(e) =>
                    setFormData({ ...formData, soilPH: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="rainfall" className="text-slate-700 font-semibold">
                  Annual Rainfall (mm)
                </Label>
                <Input
                  id="rainfall"
                  type="number"
                  placeholder="800"
                  value={formData.rainfall}
                  onChange={(e) =>
                    setFormData({ ...formData, rainfall: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="temperature" className="text-slate-700 font-semibold">
                  Average Temperature (°C)
                </Label>
                <Input
                  id="temperature"
                  type="number"
                  placeholder="25"
                  value={formData.temperature}
                  onChange={(e) =>
                    setFormData({ ...formData, temperature: e.target.value })
                  }
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="region" className="text-slate-700 font-semibold">
                  Region
                </Label>
                <Select
                  value={formData.region}
                  onValueChange={(value) =>
                    setFormData({ ...formData, region: value })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north">North India</SelectItem>
                    <SelectItem value="south">South India</SelectItem>
                    <SelectItem value="east">East India</SelectItem>
                    <SelectItem value="west">West India</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3"
              >
                {loading ? "Analyzing..." : "Get Recommendations"}
              </Button>
            </form>
          </Card>

          {/* Results */}
          <div>
            {recommendation ? (
              <div className="space-y-6">
                <Card className="p-8 border-green-200 bg-green-50">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="text-2xl font-bold text-green-900">
                      Recommended Crops
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {recommendation.crops.map((crop: string, idx: number) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-lg border border-green-200 hover:border-green-400 transition-colors"
                      >
                        <p className="font-semibold text-slate-900">{crop}</p>
                        <p className="text-sm text-slate-600">High yield potential</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-6 border-slate-200">
                    <p className="text-sm text-slate-600 mb-2">Expected Yield</p>
                    <p className="text-3xl font-bold text-green-600">
                      {recommendation.yield}%
                    </p>
                  </Card>
                  <Card className="p-6 border-slate-200">
                    <p className="text-sm text-slate-600 mb-2">Profitability</p>
                    <p className="text-3xl font-bold text-green-600">
                      {recommendation.profitability}%
                    </p>
                  </Card>
                </div>

                <Card className="p-6 border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">Key Tips</h4>
                  <ul className="space-y-3">
                    {recommendation.tips.map((tip: string, idx: number) => (
                      <li key={idx} className="flex gap-3 text-slate-700">
                        <span className="text-green-600 font-bold">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ) : (
              <Card className="p-8 border-slate-200 text-center">
                <Leaf className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600">
                  Fill in your farm details to get personalized crop recommendations
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
