"use client";

import { Shield, Lock, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function TrustIndicators() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const indicators = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SOC 2 Certified",
      description: "Enterprise-grade security",
      badge: "Compliant",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "256-bit Encryption",
      description: "Military-grade protection",
      badge: "Secure",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Regulated & Licensed",
      description: "Full regulatory compliance",
      badge: "Verified",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "?2.4B+ Traded",
      description: "This month alone",
      badge: "Proven",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <div>
      <div className="mb-12 text-center">
        <h3 className="mb-2 text-2xl font-bold text-gray-900">Why Professionals Trust Us</h3>
        <p className="text-gray-600">Institutional-grade infrastructure you can rely on</p>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {indicators.map((indicator, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center cursor-pointer transition-all duration-200 hover-lift p-4 rounded-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`rounded-xl ${indicator.bgColor} p-4 ${indicator.color} transition-transform duration-200 ${
                isHovered ? 'scale-110 rotate-6' : ''
              }`}>
                {indicator.icon}
              </div>
              <div>
                <div className="mb-1 font-bold text-lg text-gray-900">{indicator.title}</div>
                <div className="mb-2 text-sm text-gray-600">{indicator.description}</div>
                <div className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold border transition-all duration-200 ${
                  indicator.badge === "Proven"
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : indicator.badge === "Secure"
                    ? "bg-green-50 text-green-700 border-green-200"
                    : indicator.badge === "Compliant"
                    ? "bg-blue-50 text-blue-700 border-blue-200"
                    : "bg-purple-50 text-purple-700 border-purple-200"
                } ${isHovered ? 'scale-105' : ''}`}>
                  <CheckCircle2 className="h-3 w-3" />
                  {indicator.badge}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
