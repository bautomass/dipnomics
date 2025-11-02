import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/home/feature-card";
import { Stats } from "@/components/home/stats";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { AlgorithmShowcase } from "@/components/home/algorithm-showcase";
import { StrategyTemplates } from "@/components/home/strategy-templates";
import { ArrowRight, Bot, TrendingUp, BarChart3, Shield, CheckCircle2, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col page-transition">
      {/* Hero Section - Enhanced UX */}
      <section className="relative overflow-hidden border-b border-gray-200 bg-gradient-to-br from-white via-blue-50/30 to-white py-20 md:py-28">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge - Enhanced */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-100 hover:bg-blue-100 transition-colors duration-200 animate-slide-down">
              <CheckCircle2 className="h-4 w-4" />
              <span>INSTITUTIONAL-GRADE TECHNOLOGY</span>
            </div>

            {/* Headline - Smooth entrance */}
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl animate-fade-in">
              We Don&apos;t Promise.
              <br />
              <span className="gradient-text">We Deliver.</span>
            </h1>
            
            <p className="mb-4 text-xl text-gray-600 md:text-2xl font-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
              The Only Trading Platform That Guarantees Returns
            </p>
            <p className="mb-10 text-lg text-gray-500 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Our intelligent AI algorithms don&apos;t just trade?they generate consistent profits.
              For day traders. For holders. For professionals. For you.
            </p>

            {/* Social Proof - Enhanced with hover */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-8 text-sm animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 hover-lift p-3 rounded-lg transition-all duration-200 hover:bg-white">
                <div className="text-3xl font-bold text-green-600 number-premium">?2.4B+</div>
                <div className="text-left text-gray-600">
                  <div className="font-semibold text-gray-900">Traded This Month</div>
                  <div className="text-xs text-gray-500">Real money, real results</div>
                </div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="flex items-center gap-3 hover-lift p-3 rounded-lg transition-all duration-200 hover:bg-white">
                <div className="text-3xl font-bold text-blue-600 number-premium">96.3%</div>
                <div className="text-left text-gray-600">
                  <div className="font-semibold text-gray-900">AI Accuracy Rate</div>
                  <div className="text-xs text-gray-500">Institutional-level precision</div>
                </div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="flex items-center gap-3 hover-lift p-3 rounded-lg transition-all duration-200 hover:bg-white">
                <div className="text-3xl font-bold text-amber-600 number-premium">16M+</div>
                <div className="text-left text-gray-600">
                  <div className="font-semibold text-gray-900">Active Traders</div>
                  <div className="text-xs text-gray-500">Trust us with their capital</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Enhanced interactions */}
            <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <Button asChild size="lg" className="btn-premium h-12 px-8 text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 group">
                <Link href="/auto-trade">
                  Start Generating Returns Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-semibold border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                <Link href="#algorithms">See Our Algorithms</Link>
              </Button>
            </div>

            {/* Guarantee - Subtle */}
            <p className="text-sm text-gray-500 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <span className="text-green-600 font-semibold">?</span> Live trading algorithms ?{" "}
              <span className="text-green-600 font-semibold">?</span> Real ROI tracking ?{" "}
              <span className="text-green-600 font-semibold">?</span> No promises?just results
            </p>
          </div>
          
          <Stats />
        </div>
      </section>

      {/* Algorithm Showcase */}
      <section id="algorithms" className="border-b border-gray-200 bg-white py-20 md:py-28 scroll-mt-20">
        <div className="container mx-auto px-4">
          <AlgorithmShowcase />
        </div>
      </section>

      {/* Strategy Templates */}
      <section className="border-b border-gray-200 bg-gray-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <StrategyTemplates />
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-b border-gray-200 bg-white py-16">
        <div className="container mx-auto px-4">
          <TrustIndicators />
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700 border border-blue-100">
              INSTITUTIONAL TECHNOLOGY
            </div>
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
              Built for{" "}
              <span className="gradient-text">Professionals</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
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

      {/* Final CTA - Enhanced */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-20 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-12 text-center hover:bg-white/15 transition-all duration-300">
            <h2 className="mb-4 text-4xl font-extrabold md:text-5xl">
              Ready to Generate Real Returns?
            </h2>
            <p className="mb-8 text-xl text-blue-50">
              Join the traders who&apos;ve already made millions with our algorithms
            </p>
            <Button asChild size="lg" className="btn-premium h-12 px-10 text-base font-semibold bg-white text-blue-600 hover:bg-gray-50 group">
              <Link href="/pricing">
                Start Trading Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <p className="mt-6 text-sm text-blue-100">
              No credit card required ? Start with free trial ? Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
