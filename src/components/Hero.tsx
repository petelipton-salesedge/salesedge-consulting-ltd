import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/salesedge-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent opacity-95" />
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:80px_80px]" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block mb-6">
            <img 
              src={logo} 
              alt="SalesEdge Consulting" 
              className="h-48 md:h-56 lg:h-64 mx-auto drop-shadow-2xl"
            />
          </div>
          <p className="text-xl md:text-2xl text-primary-foreground/95 max-w-3xl mx-auto leading-relaxed">
            Driving Predictable Growth for Ambitious SaaS Companies
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delay">
          Fractional and advisory GTM leadership to help you scale from $1M to $10M+ ARR
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-delay-2">
          <Button 
            variant="accent" 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-6 group"
          >
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
