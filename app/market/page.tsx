"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatPercentage, formatCompactNumber } from "@/lib/utils";
import { TrendingUp, TrendingDown, Search, Filter, ArrowUpRight } from "lucide-react";

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
    trend: "up" as const,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 2500,
    change24h: -1.23,
    marketCap: 300000000000,
    volume24h: 15000000000,
    circulatingSupply: 120000000,
    trend: "down" as const,
  },
  {
    symbol: "BNB",
    name: "Binance Coin",
    price: 310,
    change24h: 3.45,
    marketCap: 46500000000,
    volume24h: 1200000000,
    circulatingSupply: 150000000,
    trend: "up" as const,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 98,
    change24h: 5.12,
    marketCap: 42000000000,
    volume24h: 800000000,
    circulatingSupply: 428000000,
    trend: "up" as const,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: 0.48,
    change24h: -0.89,
    marketCap: 16500000000,
    volume24h: 520000000,
    circulatingSupply: 34650000000,
    trend: "down" as const,
  },
];

export default function MarketPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"marketCap" | "price" | "change" | "volume">("marketCap");
  const [marketData, setMarketData] = useState(mockMarketData);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  useEffect(() => {
    // Here you would fetch real market data via WebSocket or API
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
    <div className="container mx-auto px-4 py-8 page-transition">
      {/* Header Section */}
      <div className="mb-8 animate-slide-up">
        <div className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-100">
          REAL-TIME MARKET DATA
        </div>
        <h1 className="mb-2 text-4xl font-extrabold text-gray-900 md:text-5xl">
          Market
          <span className="block gradient-text">Overview</span>
        </h1>
        <p className="text-lg text-gray-600">
          Track 63,666+ cryptocurrencies in real-time
        </p>
      </div>

      {/* Filters - Enhanced */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: "0.1s" }}>
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
          <Input
            placeholder="Search cryptocurrencies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-200 transition-all duration-200"
          />
        </div>
        <div className="relative group">
          <Filter className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-blue-600 transition-colors" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-10 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
          >
            <option value="marketCap">Market Cap</option>
            <option value="price">Price</option>
            <option value="change">24h Change</option>
            <option value="volume">Volume</option>
          </select>
        </div>
      </div>

      {/* Market Table - Desktop - Enhanced */}
      <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:block animate-scale-in" style={{ animationDelay: "0.2s" }}>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700">
                #
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-gray-700">
                Asset
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-700">
                Price
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-700">
                24h Change
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-700">
                Market Cap
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-700">
                Volume
              </th>
              <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((coin, index) => {
              const isHovered = hoveredRow === coin.symbol;
              return (
                <tr
                  key={coin.symbol}
                  className={`border-b border-gray-100 transition-all duration-200 cursor-pointer ${
                    isHovered ? "bg-blue-50/50" : "hover:bg-gray-50"
                  }`}
                  onMouseEnter={() => setHoveredRow(coin.symbol)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-500">#{index + 1}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm transition-transform duration-200 ${
                        isHovered ? 'scale-110' : ''
                      }`}>
                        {coin.symbol[0]}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{coin.name}</div>
                        <div className="text-xs text-gray-500">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="font-bold text-lg text-gray-900">{formatCurrency(coin.price, "EUR")}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div
                      className={`flex items-center justify-end gap-2 font-semibold ${
                        coin.change24h >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {coin.change24h >= 0 ? (
                        <TrendingUp className="h-5 w-5" />
                      ) : (
                        <TrendingDown className="h-5 w-5" />
                      )}
                      {formatPercentage(coin.change24h)}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-gray-600">{formatCompactNumber(coin.marketCap)}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="text-gray-600">{formatCompactNumber(coin.volume24h)}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`border-gray-300 transition-all duration-200 group/btn ${
                        isHovered 
                          ? "bg-blue-600 text-white border-blue-600" 
                          : "hover:bg-gray-50"
                      }`}
                    >
                      Trade
                      <ArrowUpRight className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                        isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                      }`} />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Market Cards - Mobile - Enhanced */}
      <div className="grid gap-4 md:hidden">
        {filteredData.map((coin, index) => (
          <Card key={coin.symbol} className="card-premium animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    {coin.symbol[0]}
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-900">{coin.name}</CardTitle>
                    <p className="text-sm text-gray-500">{coin.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">{formatCurrency(coin.price, "EUR")}</div>
                  <div
                    className={`text-sm font-semibold flex items-center justify-end gap-1 ${
                      coin.change24h >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {coin.change24h >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {formatPercentage(coin.change24h)}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <p className="text-gray-600 mb-1">Market Cap</p>
                  <p className="font-semibold text-gray-900">{formatCompactNumber(coin.marketCap)}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">24h Volume</p>
                  <p className="font-semibold text-gray-900">{formatCompactNumber(coin.volume24h)}</p>
                </div>
              </div>
              <Button className="w-full btn-premium bg-blue-600 text-white hover:bg-blue-700 group/btn">
                Trade Now
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
