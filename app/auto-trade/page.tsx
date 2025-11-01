"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
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
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Auto Trading Dashboard</h1>
        <p className="text-muted-foreground">
          Create and manage automated trading strategies
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Strategies List */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Active Strategies</CardTitle>
                <Button
                  size="sm"
                  onClick={() => {
                    setSelectedStrategy(null);
                    setShowForm(true);
                  }}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  New
                </Button>
              </div>
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

        {/* Strategy Form/Configuration */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedStrategy ? "Edit Strategy" : "Create Strategy"}
              </CardTitle>
              <CardDescription>
                Configure your automated trading strategy
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
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <p className="mb-4 text-muted-foreground">
                    Select a strategy or create a new one to get started
                  </p>
                  <Button onClick={() => setShowForm(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Strategy
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview */}
        <div className="lg:col-span-1">
          <PerformanceOverview strategies={strategies} />
        </div>
      </div>
    </div>
  );
}
