"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";
import type { TradingStrategy } from "@/types";

interface PerformanceOverviewProps {
  strategies: TradingStrategy[];
}

export function PerformanceOverview({ strategies }: PerformanceOverviewProps) {
  // Mock performance data - replace with real calculations
  const totalProfit = 0;
  const totalTrades = 0;
  const winRate = 0;
  const activeStrategies = strategies.filter((s) => s.active).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">Total Profit</p>
            <p className={`text-2xl font-bold ${totalProfit >= 0 ? "text-green-500" : "text-red-500"}`}>
              {formatCurrency(totalProfit, "EUR")}
            </p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">Total Trades</p>
            <p className="text-2xl font-bold">{totalTrades}</p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">Win Rate</p>
            <p className="text-2xl font-bold">{winRate}%</p>
          </div>
          <div className="rounded-lg bg-muted p-4">
            <p className="text-sm text-muted-foreground">Active Strategies</p>
            <p className="text-2xl font-bold">{activeStrategies}</p>
          </div>
        </div>
        
        {/* Placeholder for chart */}
        <div className="h-48 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground">
          Performance Chart
        </div>
      </CardContent>
    </Card>
  );
}
