"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Cloud,
  TrendingUp,
  Zap,
  Users,
  ArrowRight,
  Bug,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: "Smart Crop Advisor",
      description: "AI-powered crop recommendations based on soil, weather, and market data",
      href: "/crop-advisor",
    },
    {
      icon: Cloud,
      title: "Weather Insights",
      description: "Real-time weather forecasts and climate alerts for your farm",
      href: "/weather",
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Live market prices and trend analysis for better selling decisions",
      href: "/market",
    },
    {
      icon: Bug,
      title: "Disease Detection",
      description: "AI vision system to detect crop diseases early",
      href: "/disease-detection",
    },
    {
      icon: Zap,
      title: "IoT Sensors",
      description: "Smart sensor integration for real-time farm monitoring",
      href: "/farm-plan",
    },
    {
      icon: Users,
      title: "Farmer Community",
      description: "Connect with other farmers and share best practices",
      href: "/community",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                  Smart Farming,{" "}
                  <span className="bg-linear-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Better Living
                  </span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Empower your farming with AI, IoT & market intelligence. Make data-driven decisions and maximize your crop yields while adapting to climate change.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/crop-advisor">
                  <Button size="lg" className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white w-full sm:w-auto">
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/community">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-green-200 hover:bg-green-50"
                  >
                    Join Community
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div>
                  <p className="text-3xl font-bold text-green-600">50K+</p>
                  <p className="text-sm text-slate-600">Active Farmers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">95%</p>
                  <p className="text-sm text-slate-600">Accuracy Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">24/7</p>
                  <p className="text-sm text-slate-600">Support</p>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                {/* Animated background shapes */}
                <div className="absolute inset-0 bg-linear-to-br from-green-100 to-emerald-100 rounded-3xl blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute inset-0 bg-linear-to-tr from-blue-100 to-cyan-100 rounded-3xl blur-2xl opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="text-center">
                    <Leaf className="w-32 h-32 text-green-600 mx-auto mb-4 animate-bounce" />
                    <p className="text-slate-600 font-semibold">Transforming Agriculture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Powerful Features for Modern Farmers
            </h2>
            <p className="text-xl text-slate-600">
              Everything you need to optimize your farm and increase profitability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} href={feature.href}>
                  <div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                    <div className="bg-linear-to-br from-green-100 to-emerald-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{feature.description}</p>
                    <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Explore <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">
            How AgrINova Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Input Farm Data",
                description: "Share soil, weather, and crop information",
              },
              {
                step: 2,
                title: "AI Analysis",
                description: "Our AI processes data and generates insights",
              },
              {
                step: 3,
                title: "Get Recommendations",
                description: "Receive personalized farming strategies",
              },
              {
                step: 4,
                title: "Monitor & Optimize",
                description: "Track progress and adjust in real-time",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-center text-sm">
                    {item.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-1 bg-linear-to-r from-green-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers already using AgrINova to increase yields and profitability
          </p>
          <Link href="/crop-advisor">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-slate-100 font-bold"
            >
              Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-500" />
                AgrINova
              </h3>
              <p className="text-slate-400 text-sm">
                Smart farming for a sustainable future
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/crop-advisor" className="hover:text-white">Crop Advisor</Link></li>
                <li><Link href="/weather" className="hover:text-white">Weather</Link></li>
                <li><Link href="/market" className="hover:text-white">Market Prices</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/community" className="hover:text-white">Farmers Hub</Link></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-center text-sm">
              © 2024 AgrINova. Empowering Farmers, Enriching Futures.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
