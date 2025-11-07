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
    icon: TrendingUp,
    value: "+59%", 
    label: "Increase outbound pipeline mix",
    color: "text-accent"
  },
  { 
    icon: Target,
    value: "67%", 
    label: "Close rate from qualified pipe",
    color: "text-accent"
  },
  { 
    icon: Award,
    value: "$1bn", 
    label: "Exit",
    color: "text-accent"
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven track record of driving exceptional results and delivering measurable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl hover:border-accent/50 transition-all duration-300 border-2 bg-gradient-to-br from-card to-card/50 backdrop-blur"
              >
                <CardContent className="pt-8 pb-8 px-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className={`w-10 h-10 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                        {stat.value}
                      </div>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {stat.label}
                      </p>
                    </div>
                  </div>
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
