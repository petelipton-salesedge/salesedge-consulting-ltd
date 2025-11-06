import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-95" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            Sales Edge Consulting Limited
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Driving Predictable Growth for Ambitious SaaS Companies
          </p>
        </div>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-delay">
          Fractional and advisory GTM leadership to help you scale from $1M to $10M+ ARR
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-delay-2">
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
