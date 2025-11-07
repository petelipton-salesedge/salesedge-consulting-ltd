import consultingImage from "@/assets/consulting-meeting.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About SalesEdge
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-delay order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={consultingImage} 
                alt="Professional business consulting meeting" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 animate-fade-in-delay order-1 md:order-2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a SaaS revenue and GTM professional with deep experience in startups and scale-ups. 
              My strengths include building and leading high-performing commercial teams and designing 
              scalable go-to-market strategies that drive results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialise in guiding SaaS companies from $1M to $10M ARR, helping them scale efficiently, 
              hire the right talent, and achieve sustainable growth.
            </p>
            
            <div className="grid gap-4 mt-8">
              <div className="bg-card rounded-lg p-6 border-l-4 border-accent shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Experience</h3>
                <p className="text-muted-foreground">Scaled multiple companies from $0 to $40M+ ARR</p>
              </div>
              <div className="bg-card rounded-lg p-6 border-l-4 border-accent shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Expertise</h3>
                <p className="text-muted-foreground">Revenue operations, sales strategy, and team building</p>
              </div>
              <div className="bg-card rounded-lg p-6 border-l-4 border-accent shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Results</h3>
                <p className="text-muted-foreground">Consistent delivery of 100%+ revenue growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
