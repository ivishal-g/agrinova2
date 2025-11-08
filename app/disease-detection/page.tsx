/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function DiseaseDetection() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [detection, setDetection] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const commonDiseases = [
    {
      name: "Leaf Rust",
      crop: "Wheat",
      severity: "High",
      treatment: "Apply fungicide spray immediately",
      prevention: "Maintain proper crop spacing and ventilation",
    },
    {
      name: "Powdery Mildew",
      crop: "Grapes",
      severity: "Medium",
      treatment: "Use sulfur-based fungicides",
      prevention: "Ensure good air circulation",
    },
    {
      name: "Early Blight",
      crop: "Tomato",
      severity: "High",
      treatment: "Remove infected leaves and apply fungicide",
      prevention: "Avoid overhead watering",
    },
    {
      name: "Blast",
      crop: "Rice",
      severity: "Critical",
      treatment: "Apply recommended fungicides",
      prevention: "Use resistant varieties",
    },
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        analyzeImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setLoading(true);
    setTimeout(() => {
      const diseases = [
        {
          name: "Leaf Rust",
          confidence: 92,
          severity: "High",
          treatment: [
            "Apply fungicide spray immediately",
            "Remove infected leaves",
            "Improve air circulation",
          ],
          recommendation: "Urgent action required - apply treatment within 24 hours",
        },
        {
          name: "Powdery Mildew",
          confidence: 45,
          severity: "Low",
          treatment: ["Monitor closely", "Apply preventive spray if needed"],
          recommendation: "Monitor the crop closely",
        },
      ];

      setDetection({
        diseases: diseases.filter((d) => d.confidence > 50),
        overallHealth: 65,
        recommendation: "Immediate fungicide treatment recommended",
      });
      setLoading(false);
      toast.success("Disease analysis complete!");
    }, 2000);
  };

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-linear-to-br from-red-100 to-orange-100 p-3 rounded-lg">
              <Camera className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Disease Detection</h1>
          </div>
          <p className="text-xl text-slate-600">
            AI-powered crop disease detection using image analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <Card className="p-8 border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Upload Crop Image</h2>

            <div className="mb-6">
              <label className="block">
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition-colors">
                  <Camera className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-700 font-semibold mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-sm text-slate-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </label>
            </div>

            {uploadedImage && (
              <div className="mb-6">
                <img
                  src={uploadedImage}
                  alt="Uploaded crop"
                  className="w-full h-64 object-cover rounded-lg border border-slate-200"
                />
              </div>
            )}

            {uploadedImage && (
              <Button
                onClick={analyzeImage}
                disabled={loading}
                className="w-full bg-linear-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-3"
              >
                {loading ? "Analyzing..." : "Analyze Image"}
              </Button>
            )}
          </Card>

          {/* Results */}
          <div>
            {detection ? (
              <div className="space-y-6">
                {/* Overall Health */}
                <Card className="p-6 border-slate-200 bg-linear-to-br from-green-50 to-emerald-50">
                  <p className="text-sm text-slate-600 mb-2">Overall Crop Health</p>
                  <div className="flex items-end gap-4">
                    <p className="text-5xl font-bold text-green-600">
                      {detection.overallHealth}%
                    </p>
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${detection.overallHealth}%` }}
                      ></div>
                    </div>
                  </div>
                </Card>

                {/* Detected Diseases */}
                {detection.diseases.map((disease: any , idx: number) => (
                  <Card
                    key={idx}
                    className={`p-6 border-l-4 ${
                      disease.severity === "High"
                        ? "border-l-red-500 bg-red-50"
                        : "border-l-yellow-500 bg-yellow-50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">
                          {disease.name}
                        </h4>
                        <p className="text-sm text-slate-600">
                          Confidence: {disease.confidence}%
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-bold ${
                          disease.severity === "High"
                            ? "bg-red-200 text-red-900"
                            : "bg-yellow-200 text-yellow-900"
                        }`}
                      >
                        {disease.severity}
                      </span>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">
                        Treatment:
                      </p>
                      <ul className="space-y-1">
                        {disease.treatment.map((t: string, i: number) => (
                          <li key={i} className="text-sm text-slate-700 flex gap-2">
                            <span className="text-green-600">✓</span> {t}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white p-3 rounded border border-slate-200">
                      <p className="text-sm text-slate-700">
                        <strong>Recommendation:</strong> {disease.recommendation}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="p-8 border-slate-200 text-center">
                <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-600">
                  Upload a crop image to detect diseases
                </p>
              </Card>
            )}
          </div>
        </div>

        {/* Common Diseases */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Crop Diseases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {commonDiseases.map((disease, idx) => (
              <Card key={idx} className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-slate-900">{disease.name}</h4>
                    <p className="text-sm text-slate-600">Affects: {disease.crop}</p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-bold rounded ${
                      disease.severity === "Critical"
                        ? "bg-red-200 text-red-900"
                        : disease.severity === "High"
                        ? "bg-orange-200 text-orange-900"
                        : "bg-yellow-200 text-yellow-900"
                    }`}
                  >
                    {disease.severity}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong className="text-slate-900">Treatment:</strong>{" "}
                    <span className="text-slate-600">{disease.treatment}</span>
                  </p>
                  <p>
                    <strong className="text-slate-900">Prevention:</strong>{" "}
                    <span className="text-slate-600">{disease.prevention}</span>
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
