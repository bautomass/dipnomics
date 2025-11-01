"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { TradingStrategy, StrategyType, RiskLevel } from "@/types";
import { cn } from "@/lib/utils";

interface TradingStrategyFormProps {
  strategy?: TradingStrategy;
  onSave: (strategy: Omit<TradingStrategy, "id" | "createdAt">) => void;
  onCancel: () => void;
}

export function TradingStrategyForm({
  strategy,
  onSave,
  onCancel,
}: TradingStrategyFormProps) {
  const [formData, setFormData] = useState({
    name: strategy?.name || "",
    coin: strategy?.coin || "BTC",
    pair: strategy?.pair || "EUR",
    type: (strategy?.type || "dca") as StrategyType,
    amount: strategy?.amount || 0,
    stopLoss: strategy?.stopLoss || 5,
    takeProfit: strategy?.takeProfit || 10,
    risk: (strategy?.risk || "medium") as RiskLevel,
    active: strategy?.active ?? true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Strategy Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="My Trading Strategy"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="coin">Cryptocurrency</Label>
          <select
            id="coin"
            value={formData.coin}
            onChange={(e) => setFormData({ ...formData, coin: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="BTC">Bitcoin (BTC)</option>
            <option value="ETH">Ethereum (ETH)</option>
            <option value="BNB">Binance Coin (BNB)</option>
            <option value="ADA">Cardano (ADA)</option>
            <option value="SOL">Solana (SOL)</option>
          </select>
        </div>

        <div>
          <Label htmlFor="pair">Trading Pair</Label>
          <select
            id="pair"
            value={formData.pair}
            onChange={(e) => setFormData({ ...formData, pair: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="USDT">USDT</option>
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="type">Strategy Type</Label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value as StrategyType })
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="dca">DCA (Dollar Cost Averaging)</option>
          <option value="momentum">Momentum Trading</option>
          <option value="mean-reversion">Mean Reversion</option>
          <option value="ai-signal">AI Signal Based</option>
        </select>
      </div>

      <div>
        <Label htmlFor="amount">Investment Amount (?)</Label>
        <Input
          id="amount"
          type="number"
          step="0.01"
          value={formData.amount}
          onChange={(e) =>
            setFormData({ ...formData, amount: parseFloat(e.target.value) || 0 })
          }
          placeholder="1000"
          required
        />
      </div>

      <div>
        <Label>Risk Level</Label>
        <div className="flex gap-2 mt-2">
          {(["low", "medium", "high"] as RiskLevel[]).map((risk) => (
            <Button
              key={risk}
              type="button"
              variant={formData.risk === risk ? "default" : "outline"}
              onClick={() => setFormData({ ...formData, risk })}
              className="flex-1 capitalize"
            >
              {risk}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="stopLoss">Stop Loss (%)</Label>
          <Input
            id="stopLoss"
            type="number"
            step="0.1"
            value={formData.stopLoss}
            onChange={(e) =>
              setFormData({ ...formData, stopLoss: parseFloat(e.target.value) || 0 })
            }
            placeholder="5"
            required
          />
        </div>

        <div>
          <Label htmlFor="takeProfit">Take Profit (%)</Label>
          <Input
            id="takeProfit"
            type="number"
            step="0.1"
            value={formData.takeProfit}
            onChange={(e) =>
              setFormData({ ...formData, takeProfit: parseFloat(e.target.value) || 0 })
            }
            placeholder="10"
            required
          />
        </div>
      </div>

      <div className="flex gap-2 pt-4">
        <Button type="submit" className="flex-1">
          Save Strategy
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
