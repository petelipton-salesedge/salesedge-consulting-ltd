import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Target, Bot } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Fractional CRO Services",
    description: "Expert revenue leadership on a fractional basis, providing strategic guidance without full-time commitment."
  },
  {
    icon: Target,
    title: "GTM Strategy Consulting",
    description: "Comprehensive go-to-market strategy development and implementation for sustainable growth."
  },
  {
    icon: Users,
    title: "Sales Team Development",
    description: "Build and scale high-performing sales teams using proven frameworks like MEDDPICC and Command of the Message."
  },
  {
    icon: Bot,
    title: "AI-Powered Operations",
    description: "Optimize outbound sales strategies and leverage AI for operational efficiency and scalable growth."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive GTM solutions tailored to your growth stage
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
