"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { PortfolioChart } from "@/components/portfolio/portfolio-chart";

export default function PortfolioPage() {
  // Mock portfolio data - replace with real data
  const portfolio = {
    totalBalance: 0,
    totalPL: 0,
    totalPLPercent: 0,
    holdings: [] as any[],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Portfolio Overview</h1>
        <p className="text-muted-foreground">
          Track your investments and performance
        </p>
      </div>

      {/* Portfolio Summary Cards */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-normal text-muted-foreground">
              Total Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {formatCurrency(portfolio.totalBalance, "EUR")}
            </div>
            <div className={`mt-2 text-sm ${
              portfolio.totalPLPercent >= 0 ? "text-green-500" : "text-red-500"
            }`}>
              {formatPercentage(portfolio.totalPLPercent)} (24h)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-normal text-muted-foreground">
              Total Profit/Loss
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-3xl font-bold ${
              portfolio.totalPL >= 0 ? "text-green-500" : "text-red-500"
            }`}>
              {formatCurrency(portfolio.totalPL, "EUR")}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {formatPercentage(portfolio.totalPLPercent)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-normal text-muted-foreground">
              Active Positions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{portfolio.holdings.length}</div>
            <div className="mt-2 text-sm text-muted-foreground">Open trades</div>
          </CardContent>
        </Card>
      </div>

      {/* Holdings Table */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolio.holdings.length === 0 ? (
            <div className="py-12 text-center text-muted-foreground">
              No holdings yet
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-left text-sm font-semibold">Asset</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold">Quantity</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold">Avg. Buy Price</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold">Current Price</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold">Value</th>
                    <th className="px-4 py-3 text-right text-sm font-semibold">P/L</th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.holdings.map((holding) => (
                    <tr key={holding.symbol} className="border-b border-border">
                      <td className="px-4 py-3">
                        <div className="font-semibold">{holding.name}</div>
                        <div className="text-sm text-muted-foreground">{holding.symbol}</div>
                      </td>
                      <td className="px-4 py-3 text-right">{holding.quantity}</td>
                      <td className="px-4 py-3 text-right">
                        {formatCurrency(holding.avgBuyPrice, "EUR")}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {formatCurrency(holding.currentPrice, "EUR")}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        {formatCurrency(holding.value, "EUR")}
                      </td>
                      <td className={`px-4 py-3 text-right ${
                        holding.pl >= 0 ? "text-green-500" : "text-red-500"
                      }`}>
                        {formatCurrency(holding.pl, "EUR")} ({formatPercentage(holding.plPercent)})
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Performance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Portfolio Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <PortfolioChart />
        </CardContent>
      </Card>
    </div>
  );
}
