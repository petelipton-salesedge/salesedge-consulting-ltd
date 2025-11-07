import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, Target, Bot } from "lucide-react";
import growthImage from "@/assets/growth-analytics.jpg";
import teamImage from "@/assets/team-collaboration.jpg";

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive GTM solutions tailored to your growth stage
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={growthImage} 
                alt="Business growth analytics and metrics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
              <img 
                src={teamImage} 
                alt="Professional sales team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl hover:border-accent/50 transition-all duration-300 border-2"
                >
                  <CardHeader>
                    <div className="mb-4 p-3 rounded-xl bg-accent/10 w-fit group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
