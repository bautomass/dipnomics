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
    <div className="container mx-auto px-4 py-12 md:py-20 bg-white">
      {/* Hero Section */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700 border border-blue-100">
          <TrendingUp className="h-4 w-4" />
          <span>PROFESSIONAL TRADING PLATFORMS</span>
        </div>
        <h1 className="mb-4 text-5xl font-extrabold text-gray-900 md:text-6xl">
          Choose Your
          <span className="block gradient-text">Success Level</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Every plan includes our profit-generating algorithms. No promises?just results.
        </p>
      </div>

      {/* Period Selector */}
      <div className="mb-12 flex justify-center">
        <div className="inline-flex rounded-full border border-gray-300 bg-white p-1 gap-1">
          {(["monthly", "quarterly", "yearly"] as SubscriptionPeriod[]).map((p) => (
            <Button
              key={p}
              variant={period === p ? "default" : "ghost"}
              onClick={() => setPeriod(p)}
              className={`capitalize transition-all font-semibold ${
                period === p
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {p}
              {p === "yearly" && (
                <span className="ml-2 rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-700 font-bold">
                  Save 33%
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
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
              className={`h-full transition-all ${
                isProfessional
                  ? "border-blue-500 shadow-xl ring-2 ring-blue-100 scale-105 md:scale-110"
                  : "border-gray-200 hover:shadow-lg"
              }`}
            >
              {isProfessional && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-6 py-1.5 text-xs font-bold text-white shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <CardHeader className="relative pb-8">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`rounded-xl p-3 ${
                      isProfessional
                        ? "bg-blue-600 text-white"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                </div>

                <div className="mb-2">
                  <span className="text-5xl font-extrabold text-gray-900">?{plan.price}</span>
                  <span className="text-gray-600">/{period.slice(0, 3)}</span>
                </div>
                {plan.savings && (
                  <div className="inline-block rounded-full bg-green-50 px-3 py-1 text-sm font-bold text-green-700 border border-green-200">
                    {plan.savings}
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-full bg-green-50 p-1 border border-green-200">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="flex-1 text-sm leading-relaxed font-medium text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full h-12 font-bold transition-all ${
                    isProfessional
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                      : "bg-white text-blue-600 hover:bg-gray-50 border-2 border-blue-600"
                  }`}
                >
                  {isProfessional ? "Start Free Trial" : "Get Started"}
                </Button>

                <p className="text-center text-xs text-gray-500">
                  No credit card required ? Cancel anytime
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Trust Section */}
      <div className="mt-20 text-center">
        <p className="mb-8 text-sm text-gray-600 font-semibold">
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
            <div key={index} className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Check className="h-4 w-4 text-green-600" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
