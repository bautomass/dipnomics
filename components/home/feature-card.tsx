import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  highlight?: string;
}

export function FeatureCard({ icon, title, description, highlight }: FeatureCardProps) {
  return (
    <Card className="card-premium h-full group">
      <CardHeader>
        <div className="mb-4 flex items-start justify-between">
          <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
          {highlight && (
            <Badge variant="success" className="bg-green-50 text-green-700 border-green-200 font-semibold animate-scale-in">
              {highlight}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed text-gray-600">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
