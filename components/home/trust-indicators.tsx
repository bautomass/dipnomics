"use client";

import { Shield, Lock, Award, TrendingUp } from "lucide-react";

export function TrustIndicators() {
  const indicators = [
    {
      icon: <Shield className="h-5 w-5" />,
      text: "SOC 2 Certified",
      subtext: "Bank-level security",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      text: "256-bit Encryption",
      subtext: "Military-grade protection",
    },
    {
      icon: <Award className="h-5 w-5" />,
      text: "Regulated & Licensed",
      subtext: "Full compliance",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      text: "?2.4B+ Traded",
      subtext: "This month alone",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {indicators.map((indicator, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 text-center"
        >
          <div className="rounded-full bg-primary/10 p-3 text-primary">
            {indicator.icon}
          </div>
          <div className="font-semibold">{indicator.text}</div>
          <div className="text-sm text-muted-foreground">{indicator.subtext}</div>
        </div>
      ))}
    </div>
  );
}
