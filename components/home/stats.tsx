import { TrendingUp, Coins, Users } from "lucide-react";

export function Stats() {
  const stats = [
    {
      label: "Cryptocurrencies",
      value: "63,666+",
      icon: Coins,
    },
    {
      label: "AI Accuracy",
      value: "96%",
      icon: TrendingUp,
    },
    {
      label: "Daily Users",
      value: "16M+",
      icon: Users,
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="rounded-lg border border-border bg-card p-6 text-center transition-all hover:border-primary"
          >
            <Icon className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="text-3xl font-bold">{stat.value}</div>
            <div className="mt-2 text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
