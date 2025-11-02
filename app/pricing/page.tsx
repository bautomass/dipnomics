"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Crown, Rocket, TrendingUp } from "lucide-react";
import { pricingPlans } from "@/lib/pricing";
import type { SubscriptionPeriod } from "@/types";

export default function PricingPage() {
  const [period, setPeriod] = useState<SubscriptionPeriod>("monthly");

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary tracking-wide">
          <TrendingUp className="h-4 w-4" />
          <span>PROFESSIONAL TRADING PLATFORMS</span>
        </div>
        <h1 className="mb-4 text-5xl font-extrabold md:text-6xl lg:text-7xl">
          Choose Your
          <span className="block gradient-text">Success Level</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          Every plan includes our profit-generating algorithms. No promises?just results.
        </p>
      </div>

      {/* Period Selector - Premium Design */}
      <div className="mb-12 flex justify-center">
        <div className="glass rounded-full border border-white/10 p-1 inline-flex gap-2">
          {(["monthly", "quarterly", "yearly"] as SubscriptionPeriod[]).map((p) => (
            <Button
              key={p}
              variant={period === p ? "default" : "ghost"}
              onClick={() => setPeriod(p)}
              className={`relative capitalize transition-all font-semibold ${
                period === p
                  ? "bg-gradient-primary shadow-lg shadow-primary/50 text-white"
                  : "hover:bg-white/5"
              }`}
            >
              {p}
              {p === "yearly" && (
                <span className="ml-2 rounded-full bg-success/20 px-2 py-0.5 text-xs text-success font-bold">
                  Save 33%
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Pricing Cards - Premium Layout */}
      <div className="grid gap-8 md:grid-cols-3">
        {pricingPlans[period].map((plan, index) => {
          const isProfessional = plan.plan === "professional";
          const icons = {
            starter: Zap,
            professional: Crown,
            enterprise: Rocket,
          };
          const Icon = icons[plan.plan];

          return (
            <Card
              key={plan.plan}
              className={`group relative h-full transition-all duration-500 ${
                isProfessional
                  ? "card-premium border-primary/50 shadow-2xl shadow-primary/30 scale-105 md:scale-110 ring-2 ring-primary/20"
                  : "card-premium glass hover:scale-105"
              }`}
            >
              {isProfessional && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-6 py-1.5 text-xs font-bold text-white shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <CardHeader className="relative pb-8">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`rounded-xl p-3 ${
                      isProfessional
                        ? "bg-gradient-primary text-white shadow-lg shadow-primary/50"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                </div>

                <div className="mb-2">
                  <span className="text-5xl font-extrabold">?{plan.price}</span>
                  <span className="text-muted-foreground">/{period.slice(0, 3)}</span>
                </div>
                {plan.savings && (
                  <div className="inline-block rounded-full bg-success/20 px-3 py-1 text-sm font-bold text-success border border-success/30">
                    {plan.savings}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-success/20 p-1 border border-success/30">
                        <Check className="h-4 w-4 text-success" />
                      </div>
                      <span className="flex-1 text-sm leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 font-bold transition-all ${
                    isProfessional
                      ? "btn-premium bg-gradient-primary hover:shadow-xl hover:shadow-primary/50 text-white"
                      : "bg-primary/10 text-primary hover:bg-primary/20 border border-primary/30"
                  }`}
                >
                  {isProfessional ? "Start Free Trial" : "Get Started"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  No credit card required ? Cancel anytime
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Trust Section */}
      <div className="mt-20 text-center">
        <p className="mb-8 text-sm text-muted-foreground font-semibold">
          All plans include:
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "24/7 Customer Support",
            "Enterprise Security",
            "30-Day Money-Back Guarantee",
            "Free Updates Forever",
            "Live Trading Algorithms",
            "Real ROI Tracking",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm font-medium">
              <Check className="h-4 w-4 text-success" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
