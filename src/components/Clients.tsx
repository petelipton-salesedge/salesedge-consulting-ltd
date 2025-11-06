import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  { name: "MongoDB", logo: "/logos/mongodb.png" },
  { name: "EMC", logo: "/logos/dell-emc.png" },
  { name: "Shape Security", logo: "/logos/shape.png" },
  { name: "Global App Testing", logo: "/logos/global-app-testing.png" },
  { name: "JDX Consulting", logo: "/logos/jdx.jpeg" },
  { name: "Incubus Ventures", logo: "/logos/incubus.png" },
  { name: "CA Technologies", logo: "/logos/ca-tech.png" },
];

const Clients = () => {
  return (
    <section id="clients" className="py-12 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Trusted By
          </h2>
          <p className="text-lg text-muted-foreground">
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
              <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/5">
                <div className="flex items-center justify-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border hover:border-accent/50 hover:shadow-md transition-all h-24">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-12 object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          parent.innerHTML = `<p class="text-sm font-semibold text-foreground">${client.name}</p>`;
                        }
                      }}
                    />
                  ) : (
                    <p className="text-sm font-semibold text-foreground text-center">{client.name}</p>
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
