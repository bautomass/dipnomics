import { NextResponse } from "next/server";

// Mock market data - replace with real API calls to Binance, CoinGecko, etc.
export async function GET() {
  try {
    const marketData = [
      {
        symbol: "BTC",
        name: "Bitcoin",
        price: 42000,
        change24h: 2.34,
        marketCap: 824000000000,
        volume24h: 28000000000,
        circulatingSupply: 19600000,
      },
      {
        symbol: "ETH",
        name: "Ethereum",
        price: 2500,
        change24h: -1.23,
        marketCap: 300000000000,
        volume24h: 15000000000,
        circulatingSupply: 120000000,
      },
    ];

    return NextResponse.json(marketData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch market data" },
      { status: 500 }
    );
  }
}
