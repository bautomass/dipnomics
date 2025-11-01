"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Bot, Sparkles } from "lucide-react";
import { TradingStrategyForm } from "@/components/trading/strategy-form";
import { StrategyList } from "@/components/trading/strategy-list";
import { PerformanceOverview } from "@/components/trading/performance-overview";
import type { TradingStrategy } from "@/types";

export default function AutoTradePage() {
  const [strategies, setStrategies] = useState<TradingStrategy[]>([]);
  const [selectedStrategy, setSelectedStrategy] = useState<TradingStrategy | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleSaveStrategy = (strategy: Omit<TradingStrategy, "id" | "createdAt">) => {
    if (selectedStrategy) {
      setStrategies(
        strategies.map((s) =>
          s.id === selectedStrategy.id
            ? { ...strategy, id: selectedStrategy.id, createdAt: selectedStrategy.createdAt }
            : s
        )
      );
    } else {
      const newStrategy: TradingStrategy = {
        ...strategy,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      setStrategies([...strategies, newStrategy]);
    }
    setSelectedStrategy(null);
    setShowForm(false);
  };

  const handleDeleteStrategy = (id: string) => {
    setStrategies(strategies.filter((s) => s.id !== id));
    if (selectedStrategy?.id === id) {
      setSelectedStrategy(null);
      setShowForm(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Premium Header */}
      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <Bot className="h-4 w-4" />
          <span>AI-POWERED AUTOMATION</span>
        </div>
        <h1 className="mb-2 text-4xl font-extrabold md:text-5xl">
          Auto Trading
          <span className="block gradient-text">Dashboard</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Let our 96% accurate AI trade for you 24/7. Set strategies, monitor performance, profit.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Strategies List - Premium */}
        <div className="lg:col-span-1">
          <Card className="card-premium glass h-full border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-gradient-primary p-2">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Active Strategies</CardTitle>
                </div>
                <Button
                  size="sm"
                  className="btn-premium"
                  onClick={() => {
                    setSelectedStrategy(null);
                    setShowForm(true);
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  New
                </Button>
              </div>
              <CardDescription>
                Manage your automated trading strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <StrategyList
                strategies={strategies}
                selectedStrategy={selectedStrategy}
                onSelect={setSelectedStrategy}
                onDelete={handleDeleteStrategy}
                onEdit={(strategy) => {
                  setSelectedStrategy(strategy);
                  setShowForm(true);
                }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Strategy Form/Configuration - Premium */}
        <div className="lg:col-span-1">
          <Card className="card-premium glass h-full border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary" />
                {selectedStrategy ? "Edit Strategy" : "Create Strategy"}
              </CardTitle>
              <CardDescription>
                Configure your automated trading strategy with AI precision
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showForm || selectedStrategy ? (
                <TradingStrategyForm
                  strategy={selectedStrategy || undefined}
                  onSave={handleSaveStrategy}
                  onCancel={() => {
                    setShowForm(false);
                    setSelectedStrategy(null);
                  }}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="mb-6 rounded-full bg-primary/10 p-6">
                    <Bot className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">No Strategy Selected</h3>
                  <p className="mb-6 text-muted-foreground max-w-sm">
                    Create your first AI-powered trading strategy to start generating profits automatically
                  </p>
                  <Button onClick={() => setShowForm(true)} className="btn-premium" variant="gradient">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Strategy
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview - Premium */}
        <div className="lg:col-span-1">
          <PerformanceOverview strategies={strategies} />
        </div>
      </div>
    </div>
  );
}
