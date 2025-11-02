"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Target, TrendingUp, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const templates = [
  {
    id: "conservative",
    name: "Conservative Growth",
    description: "Steady returns with minimal risk. Perfect for long-term holders and conservative traders.",
    monthlyROI: "12-18%",
    riskLevel: "Low",
    icon: Target,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: "balanced",
    name: "Balanced Professional",
    description: "Optimal risk/reward ratio. Used by professional day traders and experienced investors.",
    monthlyROI: "25-35%",
    riskLevel: "Medium",
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: "aggressive",
    name: "Aggressive Alpha",
    description: "Maximum returns for experienced traders. Higher risk, higher reward.",
    monthlyROI: "40-60%",
    riskLevel: "High",
    icon: Rocket,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    id: "ai-automated",
    name: "AI Fully Automated",
    description: "Set it and forget it. Our AI handles everything?entry, exit, risk, and optimization.",
    monthlyROI: "30-45%",
    riskLevel: "Medium-High",
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
];

export function StrategyTemplates() {
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  return (
    <div>
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700 border border-blue-100">
          <Rocket className="h-4 w-4" />
          <span>READY-TO-USE TEMPLATES</span>
        </div>
        <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Start Profiting{" "}
          <span className="gradient-text">In Minutes</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Pre-configured strategies that generate returns. No coding required. Just deploy and profit.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {templates.map((template, index) => {
          const Icon = template.icon;
          const isHovered = hoveredTemplate === template.id;
          const isAI = template.id === "ai-automated";
          
          return (
            <Card
              key={template.id}
              className="card-premium h-full flex flex-col group relative overflow-hidden"
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle gradient overlay on hover */}
              {isHovered && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent pointer-events-none transition-opacity duration-300" />
              )}
              
              <CardHeader className="relative z-10">
                <div className={`mb-4 inline-flex rounded-xl ${template.bgColor} p-3 ${template.color} transition-all duration-200 ${
                  isHovered ? 'scale-110 rotate-3' : ''
                }`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {template.name}
                  </CardTitle>
                  <Badge
                    className={`${
                      template.riskLevel === "Low"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : template.riskLevel === "Medium"
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "bg-amber-50 text-amber-700 border-amber-200"
                    } transition-transform duration-200 ${
                      isHovered ? 'scale-105' : ''
                    }`}
                  >
                    {template.riskLevel}
                  </Badge>
                </div>
                <CardDescription className="text-base leading-relaxed text-gray-600">
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col relative z-10">
                <div className="mb-6 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold gradient-text-success transition-transform duration-200 inline-block">
                      {template.monthlyROI}
                    </span>
                    <span className="text-sm text-gray-600">monthly ROI</span>
                  </div>
                  {isAI && (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 border border-purple-200">
                      <Zap className="h-3 w-3" />
                      <span>AI Powered</span>
                    </div>
                  )}
                </div>
                <Button
                  asChild
                  className="mt-auto w-full btn-premium group/btn"
                  variant={isAI ? "default" : "outline"}
                >
                  <Link href="/auto-trade" className="flex items-center justify-center">
                    Deploy Template
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
        <p className="mb-4 text-gray-600">
          All templates are tested, optimized, and currently generating returns for our traders
        </p>
        <Button asChild variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
          <Link href="/auto-trade">View All Templates</Link>
        </Button>
      </div>
    </div>
  );
}
