import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Our Approach
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-xl text-foreground/90 leading-relaxed animate-fade-in text-center font-medium">
            I am a SaaS revenue and GTM professional with deep experience in startups and scale-ups. 
            My strengths include building and leading high-performing commercial teams and designing 
            scalable go-to-market strategies that drive results.
          </p>
          
          <p className="text-xl text-foreground/90 leading-relaxed animate-fade-in-delay text-center font-medium">
            We specialise in guiding SaaS companies from $1M to $10M ARR, helping them scale efficiently, 
            hire the right talent, and achieve sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
