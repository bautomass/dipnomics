import { TrendingUp, Coins, Users, DollarSign } from "lucide-react";

export function Stats() {
  const stats = [
    {
      label: "Assets Tracked",
      value: "63,666+",
      change: "+2,431 this month",
      icon: Coins,
      color: "text-primary",
    },
    {
      label: "AI Accuracy",
      value: "96.3%",
      change: "Industry leading",
      icon: TrendingUp,
      color: "text-success",
    },
    {
      label: "Active Traders",
      value: "16M+",
      change: "+127% YoY growth",
      icon: Users,
      color: "text-gold",
    },
    {
      label: "Avg. Returns",
      value: "34.2%",
      change: "Per user annually",
      icon: DollarSign,
      color: "text-success",
    },
  ];

  return (
    <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="card-premium glass rounded-xl border border-white/5 p-6 transition-all duration-300 hover:border-primary/30 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div className={`rounded-lg bg-primary/10 p-2.5 ${stat.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className={`mb-1 text-3xl font-extrabold ${stat.color} number-premium`}>
              {stat.value}
            </div>
            <div className="mb-1 text-sm font-semibold text-foreground">{stat.label}</div>
            <div className="text-xs text-muted-foreground">{stat.change}</div>
          </div>
        );
      })}
    </div>
  );
}
