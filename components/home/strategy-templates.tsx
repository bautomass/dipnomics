"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Target, TrendingUp, Zap } from "lucide-react";
import Link from "next/link";

const templates = [
  {
    id: "conservative",
    name: "Conservative Growth",
    description: "Steady returns with minimal risk. Perfect for long-term holders and conservative traders.",
    monthlyROI: "12-18%",
    riskLevel: "Low",
    icon: Target,
    color: "text-success",
    bgColor: "bg-success/10",
    features: [
      "DCA (Dollar Cost Averaging)",
      "Stop-loss at 3%",
      "Take-profit at 8%",
      "Portfolio diversification",
      "24/7 monitoring",
    ],
  },
  {
    id: "balanced",
    name: "Balanced Professional",
    description: "Optimal risk/reward ratio. Used by professional day traders and experienced investors.",
    monthlyROI: "25-35%",
    riskLevel: "Medium",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10",
    features: [
      "Multi-strategy approach",
      "Stop-loss at 5%",
      "Take-profit at 12%",
      "Momentum + Mean reversion",
      "Real-time adjustments",
    ],
  },
  {
    id: "aggressive",
    name: "Aggressive Alpha",
    description: "Maximum returns for experienced traders. Higher risk, higher reward.",
    monthlyROI: "40-60%",
    riskLevel: "High",
    icon: Rocket,
    color: "text-gold",
    bgColor: "bg-gold/10",
    features: [
      "AI predictive signals",
      "Stop-loss at 8%",
      "Take-profit at 20%",
      "Leverage optimization",
      "Advanced risk management",
    ],
  },
  {
    id: "ai-automated",
    name: "AI Fully Automated",
    description: "Set it and forget it. Our AI handles everything?entry, exit, risk, and optimization.",
    monthlyROI: "30-45%",
    riskLevel: "Medium-High",
    icon: Zap,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    features: [
      "100% automated trading",
      "AI-dynamic stop-loss",
      "AI-dynamic take-profit",
      "Market adaptation",
      "Self-optimizing algorithms",
    ],
  },
];

export function StrategyTemplates() {
  return (
    <div>
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary">
          <Rocket className="h-4 w-4" />
          <span>READY-TO-USE TEMPLATES</span>
        </div>
        <h2 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
          Start Profiting{" "}
          <span className="gradient-text">In Minutes</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          Pre-configured strategies that generate returns. No coding required. Just deploy and profit.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {templates.map((template) => {
          const Icon = template.icon;
          return (
            <Card
              key={template.id}
              className="card-premium glass h-full flex flex-col group"
            >
              <CardHeader>
                <div className={`mb-4 inline-flex rounded-xl ${template.bgColor} p-3 ${template.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 flex items-center justify-between">
                  <CardTitle className="text-xl">{template.name}</CardTitle>
                  <Badge
                    variant={
                      template.riskLevel === "Low"
                        ? "success"
                        : template.riskLevel === "Medium"
                        ? "secondary"
                        : "outline"
                    }
                    className={
                      template.riskLevel === "Low"
                        ? "bg-success/20 text-success"
                        : template.riskLevel === "Medium"
                        ? "bg-primary/20 text-primary"
                        : "bg-gold/20 text-gold"
                    }
                  >
                    {template.riskLevel}
                  </Badge>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold gradient-text-success">
                      {template.monthlyROI}
                    </span>
                    <span className="text-sm text-muted-foreground">monthly ROI</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {template.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-success mt-0.5">?</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  asChild
                  className="mt-auto btn-premium w-full"
                  variant={template.id === "ai-automated" ? "default" : "outline"}
                >
                  <Link href="/auto-trade">
                    Deploy Template
                    <Rocket className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="mb-4 text-muted-foreground">
          All templates are tested, optimized, and currently generating returns for our traders
        </p>
        <Button asChild variant="outline" size="lg" className="glass">
          <Link href="/auto-trade">View All Templates</Link>
        </Button>
      </div>
    </div>
  );
}
