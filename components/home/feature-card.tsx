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
    <Card className="group card-premium glass h-full transition-all duration-500 hover:scale-[1.02]">
      <CardHeader>
        <div className="mb-4 flex items-start justify-between">
          <div className="rounded-xl bg-gradient-primary p-3 text-white transition-transform group-hover:scale-110 group-hover:rotate-3">
            {icon}
          </div>
          {highlight && (
            <Badge variant="success" className="bg-success/20 text-success border-success/30 font-semibold">
              {highlight}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
