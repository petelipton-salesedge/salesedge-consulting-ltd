import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, TrendingUp, Target, CheckCircle } from "lucide-react";

const stats = [
  { value: 235, suffix: "%", label: "Uplift in New Sales Revenue" },
  { value: 101, suffix: "%", label: "Increase in Total Contract Value" },
  { value: 34, suffix: "pp", label: "Retention Improvement" },
  { value: 18.5, suffix: "%", label: "Quarterly Pipeline Growth" },
];

const highlights = [
  "2 × successful exits, 1 × $bn Unicorn",
  "Outbound pipeline increased from 20% to 79%",
  "Consistently driven triple-digit ARR growth",
  "Helped multiple SaaS companies scale to successful exits"
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {Math.round(count * 10) / 10}{suffix}
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold">Key Achievements</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            Proven track record of driving exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:border-accent/50 hover:shadow-lg transition-all">
              <CardContent className="pt-8 pb-8">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-2 font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border hover:border-primary/50 transition-all">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-foreground font-medium">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
