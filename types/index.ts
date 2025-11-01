export type SubscriptionPeriod = "monthly" | "quarterly" | "yearly";

export type SubscriptionPlan = "starter" | "professional" | "enterprise";

export interface PricingPlan {
  name: string;
  plan: SubscriptionPlan;
  price: number;
  period: SubscriptionPeriod;
  savings?: string;
  featured?: boolean;
  features: string[];
}

export type StrategyType = "dca" | "momentum" | "mean-reversion" | "ai-signal";

export type RiskLevel = "low" | "medium" | "high";

export interface TradingStrategy {
  id: string;
  name: string;
  coin: string;
  pair: string;
  type: StrategyType;
  amount: number;
  stopLoss: number;
  takeProfit: number;
  risk: RiskLevel;
  active: boolean;
  createdAt: string;
  updatedAt?: string;
}

export type OrderType = "market" | "limit" | "stop" | "stop-limit";
export type OrderSide = "buy" | "sell";

export interface Order {
  id: string;
  side: OrderSide;
  type: OrderType;
  coin: string;
  pair: string;
  amount: number;
  price?: number;
  limitPrice?: number;
  status: "pending" | "filled" | "cancelled" | "rejected";
  createdAt: string;
  filledAt?: string;
}

export interface MarketData {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
}

export interface Portfolio {
  totalBalance: number;
  totalPL: number;
  totalPLPercent: number;
  holdings: Holding[];
}

export interface Holding {
  coin: string;
  symbol: string;
  quantity: number;
  avgBuyPrice: number;
  currentPrice: number;
  value: number;
  pl: number;
  plPercent: number;
}
