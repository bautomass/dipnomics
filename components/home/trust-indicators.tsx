"use client";

import { Shield, Lock, Award, TrendingUp, CheckCircle2 } from "lucide-react";

export function TrustIndicators() {
  const indicators = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SOC 2 Certified",
      description: "Enterprise-grade security",
      badge: "Compliant",
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "256-bit Encryption",
      description: "Military-grade protection",
      badge: "Secure",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Regulated & Licensed",
      description: "Full regulatory compliance",
      badge: "Verified",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "?2.4B+ Traded",
      description: "This month alone",
      badge: "Proven",
    },
  ];

  return (
    <div>
      <div className="mb-12 text-center">
        <h3 className="mb-2 text-2xl font-bold">Why Professionals Trust Us</h3>
        <p className="text-muted-foreground">Institutional-grade infrastructure you can rely on</p>
      </div>
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="rounded-xl bg-primary/10 p-4 text-primary">
              {indicator.icon}
            </div>
            <div>
              <div className="mb-1 font-bold text-lg">{indicator.title}</div>
              <div className="mb-2 text-sm text-muted-foreground">{indicator.description}</div>
              <div className="inline-flex items-center gap-1 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success border border-success/20">
                <CheckCircle2 className="h-3 w-3" />
                {indicator.badge}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
