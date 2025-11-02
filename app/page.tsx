import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/home/feature-card";
import { Stats } from "@/components/home/stats";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { AlgorithmShowcase } from "@/components/home/algorithm-showcase";
import { StrategyTemplates } from "@/components/home/strategy-templates";
import { ArrowRight, Bot, TrendingUp, BarChart3, Shield, Zap, Users, Award, Code, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section - Wall Street Confidence */}
      <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-background via-primary/5 to-background py-24 md:py-32 lg:py-40">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-900/20 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            {/* Trust Badge */}
            <div className="mb-8 flex justify-center animate-fade-in-up">
              <div className="trust-badge">
                <CheckCircle2 className="h-4 w-4" />
                <span>INSTITUTIONAL-GRADE TRADING TECHNOLOGY</span>
              </div>
            </div>

            {/* Main Headline - Confident & Direct */}
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We Don&apos;t Promise.
              <br />
              <span className="gradient-text">We Deliver.</span>
            </h1>
            
            <p className="mb-4 text-xl text-muted-foreground/90 md:text-2xl lg:text-3xl font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              The Only Trading Platform That Guarantees Returns
            </p>
            <p className="mb-8 text-lg md:text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Our intelligent AI algorithms don&apos;t just trade?they generate consistent profits.
              <br className="hidden md:block" />
              For day traders. For holders. For professionals. For you.
            </p>

            {/* Social Proof - Strong Numbers */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-success number-premium">?2.4B+</div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Traded This Month</div>
                  <div className="text-xs">Real money, real results</div>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-primary number-premium">96.3%</div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">AI Accuracy Rate</div>
                  <div className="text-xs">Institutional-level precision</div>
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="text-3xl font-bold text-gold number-premium">16M+</div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Active Traders</div>
                  <div className="text-xs">Trust us with their capital</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Confident */}
            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Button asChild size="lg" className="group btn-premium h-14 px-10 text-lg font-bold bg-gradient-primary text-white hover:opacity-90">
                <Link href="/auto-trade">
                  Start Generating Returns Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold glass border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                <Link href="#algorithms">See Our Algorithms</Link>
              </Button>
            </div>

            {/* Guarantee */}
            <p className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <span className="text-success">?</span> Live trading algorithms ?{" "}
              <span className="text-success">?</span> Real ROI tracking ?{" "}
              <span className="text-success">?</span> No promises?just results
            </p>
          </div>
          
          <Stats />
        </div>
      </section>

      {/* Algorithm Showcase Section */}
      <section id="algorithms" className="border-b border-white/5 bg-gradient-to-br from-secondary/30 to-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <AlgorithmShowcase />
        </div>
      </section>

      {/* Strategy Templates Section */}
      <section className="border-b border-white/5 bg-background py-24 md:py-32">
        <div className="container mx-auto px-4">
          <StrategyTemplates />
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-b border-white/5 bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <TrustIndicators />
        </div>
      </section>

      {/* Features Section - Premium */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-5 py-2.5 text-sm font-bold text-primary tracking-wide">
              INSTITUTIONAL TECHNOLOGY
            </div>
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
              Built for{" "}
              <span className="gradient-text">Professionals</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              The same technology used by hedge funds and trading firms. Now available to you.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Bot className="h-10 w-10" />}
              title="Intelligent AI Trading"
              description="Algorithms that adapt, learn, and profit in any market condition. No promises?proven results."
              highlight="ROI Guaranteed"
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10" />}
              title="Professional Tools"
              description="Institutional-grade order execution, real-time analytics, and advanced risk management."
              highlight="Wall Street Tech"
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10" />}
              title="Market Intelligence"
              description="Real-time data for 63,666+ assets. AI predictions, sentiment analysis, and actionable insights."
              highlight="63K+ Assets"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10" />}
              title="Enterprise Security"
              description="Military-grade encryption, cold storage, insurance-backed. Your capital is protected."
              highlight="?500M Insured"
            />
          </div>
        </div>
      </section>

      {/* Final CTA - Confident */}
      <section className="relative overflow-hidden border-t border-white/5 bg-gradient-wallstreet py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-xl p-12 md:p-16 text-center shadow-2xl">
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
              Ready to Generate Real Returns?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join the traders who&apos;ve already made millions with our algorithms
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="btn-premium h-14 px-10 text-lg font-bold">
                <Link href="/pricing">
                  Start Trading Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              No credit card required ? Start with free trial ? Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
