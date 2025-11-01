import { TrendingUp, Coins, Users, Zap } from "lucide-react";

export function Stats() {
  const stats = [
    {
      label: "Cryptocurrencies",
      value: "63,666+",
      icon: Coins,
      change: "+2,431 this month",
      color: "text-primary",
    },
    {
      label: "AI Accuracy",
      value: "96.3%",
      icon: TrendingUp,
      change: "Industry leading",
      color: "text-success",
    },
    {
      label: "Daily Users",
      value: "16M+",
      icon: Users,
      change: "+127% YoY growth",
      color: "text-gold",
    },
    {
      label: "Avg. Returns",
      value: "34.2%",
      icon: Zap,
      change: "Per user annually",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="group card-premium glass rounded-2xl border border-border/50 p-6 transition-all duration-300 hover:border-primary/50"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className={`rounded-xl bg-primary/10 p-3 ${stat.color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
            <div className={`mb-1 text-4xl font-extrabold ${stat.color} number-animate`}>
              {stat.value}
            </div>
            <div className="mb-2 text-sm font-semibold">{stat.label}</div>
            <div className="text-xs text-muted-foreground">{stat.change}</div>
          </div>
        );
      })}
    </div>
  );
}
