import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/home/feature-card";
import { Stats } from "@/components/home/stats";
import { ArrowRight, Bot, TrendingUp, BarChart3, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Professional Trading Platform
              <span className="block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Auto trading, manual trading, and advanced analytics all in one place.
              <br className="hidden md:block" />
              Trade smarter with 96% AI prediction accuracy.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group">
                <Link href="/auto-trade">
                  Start Trading
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
          
          <Stats />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Platform Features</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Everything you need to trade cryptocurrencies professionally
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Bot className="h-8 w-8" />}
              title="Auto Trading"
              description="Set up automated trading strategies based on AI predictions and technical indicators"
            />
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8" />}
              title="Manual Trading"
              description="Full control with advanced order types, real-time charts, and market depth"
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Advanced Analytics"
              description="Comprehensive market data, predictions, and portfolio performance metrics"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Secure & Reliable"
              description="Bank-level security with encrypted transactions and API access"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Trading?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Join thousands of traders using Dipnomics to maximize their returns
            </p>
            <Button asChild size="lg">
              <Link href="/pricing">
                Choose Your Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
