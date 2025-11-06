import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Deep expertise in SaaS revenue and go-to-market strategies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Deep Experience</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I am a SaaS revenue and GTM professional with deep experience in startups and scale-ups. 
                    My strengths include building and leading high-performing commercial teams and designing 
                    scalable go-to-market strategies that drive results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Scalable Growth</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We specialise in guiding SaaS companies from $1M to $10M ARR, helping them scale 
                    efficiently, hire the right talent, and achieve sustainable growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
