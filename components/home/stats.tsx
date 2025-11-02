import { TrendingUp, Coins, Users, DollarSign } from "lucide-react";

export function Stats() {
  const stats = [
    {
      label: "Assets Tracked",
      value: "63,666+",
      change: "+2,431 this month",
      icon: Coins,
      color: "text-blue-600",
    },
    {
      label: "AI Accuracy",
      value: "96.3%",
      change: "Industry leading",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      label: "Active Traders",
      value: "16M+",
      change: "+127% YoY growth",
      icon: Users,
      color: "text-amber-600",
    },
    {
      label: "Avg. Returns",
      value: "34.2%",
      change: "Per user annually",
      icon: DollarSign,
      color: "text-green-600",
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className={`rounded-lg bg-gray-50 p-2.5 ${stat.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
            <div className={`mb-1 text-3xl font-extrabold ${stat.color} number-premium`}>
              {stat.value}
            </div>
            <div className="mb-1 text-sm font-semibold text-gray-900">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.change}</div>
          </div>
        );
      })}
    </div>
  );
}
