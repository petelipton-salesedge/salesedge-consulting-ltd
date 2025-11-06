const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SalesEdge Consulting Ltd</h3>
            <p className="text-primary-foreground/80 text-sm">
              Driving predictable growth for ambitious SaaS companies through expert GTM leadership.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-accent transition-colors">
                  Achievements
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-primary-foreground/80">
              Email:{" "}
              <a href="mailto:contact@salesedge.consulting" className="hover:text-accent transition-colors">
                contact@salesedge.consulting
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} SalesEdge Consulting Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
