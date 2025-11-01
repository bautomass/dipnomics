"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TradingChart } from "@/components/trading/trading-chart";
import { OrderHistory } from "@/components/trading/order-history";
import { formatCurrency } from "@/lib/utils";

export default function ManualTradePage() {
  const [orderSide, setOrderSide] = useState<"buy" | "sell">("buy");
  const [orderType, setOrderType] = useState<"market" | "limit" | "stop" | "stop-limit">("market");
  const [amount, setAmount] = useState("");
  const [limitPrice, setLimitPrice] = useState("");

  const handleSubmitOrder = () => {
    // Handle order submission
    alert(`Placing ${orderSide} order: ${orderType} for ${amount}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Manual Trading</h1>
        <p className="text-muted-foreground">
          Execute trades with full control
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Trading Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Trading Chart</CardTitle>
                <div className="flex gap-2">
                  <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>BTC/EUR</option>
                    <option>ETH/EUR</option>
                    <option>BNB/EUR</option>
                  </select>
                  <div className="flex gap-1">
                    {["1m", "5m", "15m", "1h", "1d"].map((tf) => (
                      <Button key={tf} variant="outline" size="sm">
                        {tf}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <TradingChart />
            </CardContent>
          </Card>
        </div>

        {/* Order Panel */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <div className="flex gap-2">
                <Button
                  variant={orderSide === "buy" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setOrderSide("buy")}
                >
                  Buy
                </Button>
                <Button
                  variant={orderSide === "sell" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setOrderSide("sell")}
                >
                  Sell
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="orderType">Order Type</Label>
                <select
                  id="orderType"
                  value={orderType}
                  onChange={(e) => setOrderType(e.target.value as any)}
                  className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="market">Market Order</option>
                  <option value="limit">Limit Order</option>
                  <option value="stop">Stop Loss</option>
                  <option value="stop-limit">Stop Limit</option>
                </select>
              </div>

              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.00000001"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>

              {(orderType === "limit" || orderType === "stop-limit") && (
                <div>
                  <Label htmlFor="limitPrice">Limit Price</Label>
                  <Input
                    id="limitPrice"
                    type="number"
                    step="0.01"
                    value={limitPrice}
                    onChange={(e) => setLimitPrice(e.target.value)}
                    placeholder="0.00"
                  />
                </div>
              )}

              <div className="space-y-2 rounded-lg bg-muted p-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Estimated Cost</span>
                  <span className="font-semibold">{formatCurrency(0, "EUR")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Available Balance</span>
                  <span className="font-semibold">{formatCurrency(0, "EUR")}</span>
                </div>
              </div>

              <Button className="w-full" onClick={handleSubmitOrder}>
                Place {orderSide === "buy" ? "Buy" : "Sell"} Order
              </Button>

              <OrderHistory />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
