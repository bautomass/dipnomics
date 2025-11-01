"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/pricing";
import type { SubscriptionPeriod } from "@/types";

export default function PricingPage() {
  const [period, setPeriod] = useState<SubscriptionPeriod>("monthly");

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Choose Your Plan</h1>
        <p className="text-lg text-muted-foreground">
          Select the subscription that fits your trading needs
        </p>
      </div>

      {/* Period Selector */}
      <div className="mb-12 flex justify-center gap-4">
        {(["monthly", "quarterly", "yearly"] as SubscriptionPeriod[]).map((p) => (
          <Button
            key={p}
            variant={period === p ? "default" : "outline"}
            onClick={() => setPeriod(p)}
            className="capitalize"
          >
            {p}
          </Button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {pricingPlans[period].map((plan) => (
          <Card
            key={plan.plan}
            className={`relative transition-all hover:shadow-lg ${
              plan.featured
                ? "border-primary shadow-lg shadow-primary/20 scale-105"
                : ""
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                POPULAR
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">?{plan.price}</span>
                <span className="text-muted-foreground">/{period.slice(0, 3)}</span>
              </div>
              {plan.savings && (
                <CardDescription className="text-primary font-semibold">
                  {plan.savings}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.featured ? "" : "variant-outline"}`}
                variant={plan.featured ? "default" : "outline"}
              >
                Subscribe Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
