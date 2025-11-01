"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import type { TradingStrategy } from "@/types";
import { cn } from "@/lib/utils";

interface StrategyListProps {
  strategies: TradingStrategy[];
  selectedStrategy: TradingStrategy | null;
  onSelect: (strategy: TradingStrategy) => void;
  onEdit: (strategy: TradingStrategy) => void;
  onDelete: (id: string) => void;
}

export function StrategyList({
  strategies,
  selectedStrategy,
  onSelect,
  onEdit,
  onDelete,
}: StrategyListProps) {
  if (strategies.length === 0) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        No strategies yet. Create your first strategy!
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {strategies.map((strategy) => (
        <Card
          key={strategy.id}
          className={cn(
            "cursor-pointer transition-all hover:border-primary",
            selectedStrategy?.id === strategy.id && "border-primary bg-primary/5"
          )}
          onClick={() => onSelect(strategy)}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold">{strategy.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {strategy.coin}/{strategy.pair} ? {strategy.type}
                </p>
                <p className="mt-1 text-sm font-medium">
                  ?{strategy.amount.toLocaleString()}
                </p>
              </div>
              <div className="flex gap-1">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(strategy);
                  }}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(strategy.id);
                  }}
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            </div>
            <div className="mt-2 flex gap-2">
              <span className="rounded-full bg-secondary px-2 py-1 text-xs">
                {strategy.risk}
              </span>
              {strategy.active && (
                <span className="rounded-full bg-green-500/20 text-green-500 px-2 py-1 text-xs">
                  Active
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
