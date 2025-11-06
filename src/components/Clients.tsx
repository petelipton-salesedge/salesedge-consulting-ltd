const clients = [
  { name: "MongoDB", logo: "/logos/mongodb.svg" },
  { name: "EMC", logo: "/logos/emc.png" },
  { name: "Shape Security", logo: "/logos/shape-security.jpg" },
  { name: "Global App Testing", logo: "/logos/global-app-testing.svg" },
  { name: "JDX Consulting", logo: null },
  { name: "Incubus Ventures", logo: null },
  { name: "CA Technologies", logo: null },
];

const Clients = () => {
  return (
    <section id="clients" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted By</h2>
          <p className="text-xl text-muted-foreground">
            Partnering with leading companies to drive growth
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 rounded-lg bg-card border-2 hover:border-primary/50 hover:shadow-md transition-all"
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-w-full h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={client.logo ? "hidden text-center" : "text-center"}>
                <p className="text-sm font-semibold text-foreground">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
