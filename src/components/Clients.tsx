import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "EMC", logo: null },
  { name: "Shape Security", logo: null },
  { name: "Global App Testing", logo: null },
  { name: "JDX Consulting", logo: null },
  { name: "Incubus Ventures", logo: null },
  { name: "CA Technologies", logo: null },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Trusted By
          </h2>
          <p className="text-xl text-muted-foreground">
            Partnering with leading companies to drive growth
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                <div className="flex items-center justify-center p-8 rounded-xl bg-card border-2 hover:border-accent/50 hover:shadow-lg transition-all h-32">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<p class="text-lg font-bold text-foreground">${client.name}</p>`;
                        }
                      }}
                    />
                  ) : (
                    <p className="text-lg font-bold text-foreground text-center">{client.name}</p>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Clients;
