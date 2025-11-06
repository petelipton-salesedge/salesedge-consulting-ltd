import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, DollarSign, Users, Award, Zap } from "lucide-react";

const stats = [
  { 
    icon: DollarSign,
    value: "$0 → $5M", 
    label: "Built GTM motion, hired and scaled first sales teams",
    color: "text-accent"
  },
  { 
    icon: TrendingUp,
    value: "$10M → $40M+", 
    label: "Scaled revenue orgs, improved retention +34 pts",
    color: "text-accent"
  },
  { 
    icon: Target,
    value: "+235%", 
    label: "Growth in new-sales revenue",
    color: "text-accent"
  },
  { 
    icon: Zap,
    value: "+101%", 
    label: "Increase in TCV",
    color: "text-accent"
  },
  { 
    icon: Users,
    value: "+5 pt", 
    label: "Uplift in NDR",
    color: "text-accent"
  },
  { 
    icon: TrendingUp,
    value: "+18.5%", 
    label: "Increase in quarterly pipeline (79% outbound vs 20%)",
    color: "text-accent"
  },
  { 
    icon: Award,
    value: "2", 
    label: "Successful scale-up exits",
    color: "text-accent"
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-12 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Key Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record of driving exceptional results and delivering measurable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg hover:border-accent/50 transition-all duration-300 border bg-card"
              >
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
