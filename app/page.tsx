import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/home/feature-card";
import { Stats } from "@/components/home/stats";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { ArrowRight, Bot, TrendingUp, BarChart3, Shield, Zap, Users, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section - Premium Design */}
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-background via-primary/5 to-background py-24 md:py-32 lg:py-40">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center">
            {/* Trust Badge */}
            <div className="mb-8 flex justify-center animate-fade-in-up">
              <div className="trust-badge">
                <Award className="h-4 w-4" />
                <span>Trusted by 16M+ traders worldwide</span>
              </div>
            </div>

            {/* Main Headline - Psychology-driven */}
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Stop Trading.
              <br />
              <span className="gradient-text">Start Winning.</span>
            </h1>
            
            <p className="mb-4 text-xl text-muted-foreground md:text-2xl lg:text-3xl font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              The Only Platform That Turns Your Portfolio Into a
            </p>
            <p className="mb-8 text-2xl md:text-3xl lg:text-4xl font-bold gradient-text-gold animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Profit-Generating Machine
            </p>

            {/* Social Proof */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-gradient-to-br from-primary to-purple-500" />
                  ))}
                </div>
                <span>Join 16M+ active traders</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-success">96%</span>
                <span>AI prediction accuracy</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gold">?2.4B+</span>
                <span>Traded this month</span>
              </div>
            </div>

            {/* CTA Buttons - Urgency + Value */}
            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Button asChild size="lg" className="group btn-premium h-14 px-8 text-lg font-semibold bg-gradient-primary hover:bg-gradient-primary/90">
                <Link href="/auto-trade">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg font-semibold glass border-primary/50 hover:bg-primary/10">
                <Link href="/pricing">See Pricing Plans</Link>
              </Button>
            </div>

            {/* Risk Reversal */}
            <p className="text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <span className="text-success">?</span> No credit card required ?{" "}
              <span className="text-success">?</span> Cancel anytime ?{" "}
              <span className="text-success">?</span> 30-day money-back guarantee
            </p>
          </div>
          
          <Stats />
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="border-b border-border/50 bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <TrustIndicators />
        </div>
      </section>

      {/* Features Section - Premium */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              POWERED BY AI
            </div>
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
              Everything You Need to{" "}
              <span className="gradient-text">Dominate Markets</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              The most advanced trading platform ever created. Used by professionals, loved by beginners.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={<Bot className="h-10 w-10" />}
              title="AI Auto Trading"
              description="Let our 96% accurate AI execute trades 24/7. Set it, forget it, and watch your portfolio grow automatically."
              highlight="96% Accuracy"
            />
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10" />}
              title="Manual Trading"
              description="Full professional-grade control. Advanced order types, real-time charts, and institutional-level tools."
              highlight="Pro Tools"
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10" />}
              title="Market Intelligence"
              description="Real-time data for 63,666+ cryptocurrencies. AI predictions, sentiment analysis, and market insights."
              highlight="63K+ Assets"
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10" />}
              title="Bank-Level Security"
              description="Military-grade encryption, cold storage, insurance-backed. Your funds are safer than in a bank."
              highlight="$500M Insured"
            />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="relative overflow-hidden border-y border-border/50 bg-gradient-to-br from-primary/10 via-background to-purple-500/10 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-extrabold md:text-5xl">
              Why Traders Choose{" "}
              <span className="gradient-text">Dipnomics</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="card-premium glass rounded-2xl p-8 text-center">
                <div className="mb-4 text-5xl font-bold gradient-text-gold">10x</div>
                <h3 className="mb-2 text-xl font-semibold">Faster Execution</h3>
                <p className="text-muted-foreground">Lightning-fast trades. Never miss an opportunity.</p>
              </div>
              <div className="card-premium glass rounded-2xl p-8 text-center">
                <div className="mb-4 text-5xl font-bold gradient-text-success">24/7</div>
                <h3 className="mb-2 text-xl font-semibold">Always Active</h3>
                <p className="text-muted-foreground">AI never sleeps. Your profits keep growing.</p>
              </div>
              <div className="card-premium glass rounded-2xl p-8 text-center">
                <div className="mb-4 text-5xl font-bold gradient-text">?0</div>
                <h3 className="mb-2 text-xl font-semibold">Hidden Fees</h3>
                <p className="text-muted-foreground">Transparent pricing. What you see is what you pay.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Final Push */}
      <section className="relative overflow-hidden border-t border-border/50 bg-gradient-premium py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-3xl border border-primary/30 bg-card/50 backdrop-blur-xl p-12 text-center shadow-2xl">
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
              Ready to 10X Your Returns?
            </h2>
            <p className="mb-8 text-xl text-muted-foreground">
              Join the elite traders who&apos;ve already made millions with Dipnomics
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="btn-premium h-14 px-10 text-lg font-bold">
                <Link href="/pricing">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              ? Limited time: First 100 users get 50% off first month
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
