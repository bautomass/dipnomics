"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatPercentage, formatCompactNumber } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";
import Image from "next/image";

// Mock market data - replace with API call
const mockMarketData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 42000,
    change24h: 2.34,
    marketCap: 824000000000,
    volume24h: 28000000000,
    circulatingSupply: 19600000,
    image: "/img/bitcoin.png",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 2500,
    change24h: -1.23,
    marketCap: 300000000000,
    volume24h: 15000000000,
    circulatingSupply: 120000000,
    image: "/img/ethereum.png",
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    price: 310,
    change24h: 3.45,
    marketCap: 46500000000,
    volume24h: 1200000000,
    circulatingSupply: 150000000,
    image: "/img/binancesmall.svg",
  },
];

export default function MarketPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"marketCap" | "price" | "change" | "volume">("marketCap");
  const [marketData, setMarketData] = useState(mockMarketData);

  useEffect(() => {
    // Here you would fetch real market data via WebSocket or API
    // For now using mock data
  }, []);

  const filteredData = marketData
    .filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price":
          return b.price - a.price;
        case "change":
          return b.change24h - a.change24h;
        case "volume":
          return b.volume24h - a.volume24h;
        default:
          return b.marketCap - a.marketCap;
      }
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold md:text-4xl">Market Overview</h1>
        <p className="text-muted-foreground">
          Real-time data for 63,666 cryptocurrencies (13,362 actively traded)
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <Input
          placeholder="Search cryptocurrencies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="marketCap">Market Cap</option>
          <option value="price">Price</option>
          <option value="change">24h Change</option>
          <option value="volume">Volume</option>
        </select>
      </div>

      {/* Market Table - Desktop */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                #
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                Price
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                24h Change
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                Market Cap
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                Volume
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((coin, index) => (
              <tr
                key={coin.symbol}
                className="border-b border-border transition-colors hover:bg-muted/50"
              >
                <td className="px-4 py-4">{index + 1}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <div className="relative h-6 w-6">
                      {/* <Image src={coin.image} alt={coin.name} fill className="object-contain" /> */}
                      <div className="h-6 w-6 rounded-full bg-primary/20" />
                    </div>
                    <div>
                      <div className="font-semibold">{coin.name}</div>
                      <div className="text-xs text-muted-foreground">{coin.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-right font-semibold">
                  {formatCurrency(coin.price, "EUR")}
                </td>
                <td className="px-4 py-4 text-right">
                  <div
                    className={`flex items-center justify-end gap-1 ${
                      coin.change24h >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {coin.change24h >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {formatPercentage(coin.change24h)}
                  </div>
                </td>
                <td className="px-4 py-4 text-right text-muted-foreground">
                  {formatCompactNumber(coin.marketCap)}
                </td>
                <td className="px-4 py-4 text-right text-muted-foreground">
                  {formatCompactNumber(coin.volume24h)}
                </td>
                <td className="px-4 py-4 text-right">
                  <Button variant="outline" size="sm">
                    Trade
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Market Cards - Mobile */}
      <div className="grid gap-4 md:hidden">
        {filteredData.map((coin, index) => (
          <Card key={coin.symbol}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20" />
                  <div>
                    <CardTitle className="text-lg">{coin.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{coin.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-semibold">{formatCurrency(coin.price, "EUR")}</div>
                  <div
                    className={`text-sm ${
                      coin.change24h >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {formatPercentage(coin.change24h)}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Market Cap</p>
                  <p className="font-semibold">{formatCompactNumber(coin.marketCap)}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">24h Volume</p>
                  <p className="font-semibold">{formatCompactNumber(coin.volume24h)}</p>
                </div>
              </div>
              <Button className="mt-4 w-full" variant="outline">
                Trade
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
