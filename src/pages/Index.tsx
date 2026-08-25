import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import headshot from "@/assets/peter-headshot-placeholder.jpg";

const ledgerStats = [
  {
    value: "$7.8M→$11.2M",
    label: "ARR growth as Acting CRO, Global App Testing",
  },
  {
    value: "20%→67.5%",
    label: "Qualified pipeline close rate, same role",
  },
  {
    value: "$1bn",
    label: "Acquisition - Shape Security, 2020",
  },
  {
    value: "+235%",
    label: "Net-new revenue uplift, Snyk EMEA (6 months)",
  },
];

const factPairs = [
  {
    label: "EXPERIENCE",
    value: "Snyk, Global App Testing, MongoDB, JDX, Shape Security, DellEMC",
  },
  {
    label: "EXPERTISE",
    value: "MEDDPICC, Command of the Message, Challenger, revenue ops",
  },
  {
    label: "CREDENTIALS",
    value: "Executive MBA (Quantic) · MEng, University of Leeds",
  },
  {
    label: "ENGAGEMENT",
    value: "Fractional retainer, 1-3 days / week",
  },
];

const resultRows = [
  {
    role: "ROLE 01",
    company: "Snyk",
    subtitle: "Interim Sr. Sales Director, EMEA · 2025",
    tag: "Net-new revenue, 6 mo.",
    metric: "+235%",
  },
  {
    role: "ROLE 02",
    company: "Global App Testing",
    subtitle: "Acting CRO · 2022-2025",
    tag: "ARR, $7.8M → $11.2M",
    metric: "+43%",
  },
  {
    role: "ROLE 03",
    company: "JDX Consulting",
    subtitle: "Director / Global Head of Sales · 2020-2022",
    tag: "Managed-service margin",
    metric: "12%→84%",
  },
  {
    role: "ROLE 04",
    company: "Shape Security",
    subtitle: "Sales Director, EMEA · 2019-2020",
    tag: "Personal net-new ARR",
    metric: "£1.3M",
  },
];

const careerNames = [
  "Snyk",
  "Global App Testing",
  "MongoDB",
  "JDX Consulting",
  "Shape Security",
  "DellEMC",
  "CA Technologies",
  "Huddle",
];

const enterpriseNames = ["Apple", "Visa", "Capital One", "J.P. Morgan", "Deutsche Bank", "ADP", "HDFC"];

const services = [
  {
    title: "Fractional CRO",
    description:
      "Embedded revenue leadership - pipeline reviews, forecasting, board reporting, and hands-on coaching for your commercial team, without a full-time hire.",
    format: "2-3 DAYS / WEEK",
  },
  {
    title: "GTM Strategy",
    description:
      "Positioning, ICP, pricing and packaging, and channel strategy - built and stress-tested against your actual pipeline data, not a template.",
    format: "4-6 WEEK SPRINT",
  },
  {
    title: "Sales Team Build",
    description:
      "Hiring, onboarding, and coaching your first AEs and SDRs on proven frameworks - MEDDPICC, Command of the Message - so the motion survives without me.",
    format: "RETAINER",
  },
  {
    title: "AI-Powered Ops",
    description:
      "Rebuilding outbound and revenue-ops workflows around AI tooling - more qualified pipeline per rep, without adding headcount.",
    format: "PROJECT-BASED",
  },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Track Record", href: "#track-record" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    goal: "",
  });
  const { toast } = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.goal) {
      toast({
        title: "Missing details",
        description: "Please complete the required fields before sending.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Check the email",
        description: "Please enter a valid work email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message ready",
      description: "Thanks. SalesEdge Consulting will follow up by email.",
    });

    setFormData({ name: "", email: "", company: "", goal: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 lg:px-8" aria-label="Primary navigation">
          <a href="#top" className="group font-mono text-sm font-medium tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            <span className="text-accent" aria-hidden="true">＋</span>
            <span>SalesEdge</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {item.label}
              </a>
            ))}
          </div>
          <Button asChild variant="outline" className="h-10 border-primary bg-transparent px-4 font-mono text-xs tracking-wider text-primary hover:bg-primary hover:text-primary-foreground">
            <a href="#contact">Book a Call</a>
          </Button>
        </nav>
      </header>

      <main id="top">
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-20 lg:grid-cols-[minmax(0,3fr)_minmax(190px,1fr)] lg:px-8 lg:py-24">
            <div className="max-w-5xl space-y-8">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">FRACTIONAL CRO · GTM ADVISORY</p>
              <h1 className="max-w-5xl font-display text-5xl font-light leading-[0.98] tracking-normal text-foreground md:text-7xl lg:text-8xl">
                Revenue leadership for SaaS founders who've <em className="font-display italic text-accent">outgrown</em> guesswork.
              </h1>
              <p className="max-w-3xl text-xl leading-8 text-muted-foreground md:text-2xl md:leading-9">
                20 years as CRO, VP Sales, and Sales Director inside SaaS and security companies - now available as fractional leadership for the next one. Real P&amp;L, real board reporting, real quota.
              </p>
              <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-12 w-full justify-center bg-primary px-6 font-sans text-base font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto">
                  <a href="#contact">Book a strategy call →</a>
                </Button>
                <a
                  href="#track-record"
                  className="text-base font-medium text-foreground underline underline-offset-8 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  See the track record
                </a>
              </div>
            </div>

            <aside className="justify-self-start lg:justify-self-end">
              <figure className="max-w-[220px]">
                <div className="border border-accent p-2">
                  <img
                    src={headshot}
                    alt="Professional headshot placeholder for SalesEdge Consulting"
                    width={1024}
                    height={1024}
                    className="aspect-square w-full object-cover grayscale contrast-125"
                  />
                </div>
                <figcaption className="mt-4 border-t border-border pt-3 font-mono text-xs uppercase leading-5 tracking-wider text-muted-foreground">
                  SalesEdge Consulting / Fractional CRO
                </figcaption>
              </figure>
            </aside>
          </div>
        </section>

        <section id="track-record" className="bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
            <div className="mb-8 flex flex-col gap-3 border-b border-border-dark pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">TRACK RECORD - SELECTED RESULTS</p>
              <p className="font-mono text-xs uppercase tracking-wider text-primary-foreground/65">Updated 2026</p>
            </div>
            <div className="grid grid-cols-1 border-border-dark sm:grid-cols-2 lg:grid-cols-4">
              {ledgerStats.map((stat, index) => (
                <div key={stat.value} className={`border-border-dark py-6 ${index > 0 ? "lg:border-l" : ""} ${index % 2 === 1 ? "sm:border-l lg:border-l" : ""}`}>
                  <div className="px-0 sm:px-6 lg:px-7">
                    <p className="font-mono text-3xl font-medium tracking-normal text-accent-bright md:text-4xl">{stat.value}</p>
                    <p className="mt-3 max-w-[18rem] text-sm leading-6 text-primary-foreground/68">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">ABOUT</p>
              <blockquote className="border-l border-accent pl-6 font-display text-3xl font-light italic leading-tight text-foreground md:text-4xl">
                There's rarely one root cause. It's the systems, the execution, or whether the value story actually lines up with what's being sold - and most teams have only fixed one of the three.
              </blockquote>
            </div>
            <div className="space-y-8">
              <div className="space-y-5 text-lg leading-8 text-muted-foreground">
                <p>
                  I'm a SaaS revenue and GTM operator. Over the past decade I've built and led commercial teams inside startups and scale-ups, and taken revenue orgs through every stage from first sale to $40M+ ARR - including one exit at $1bn.
                </p>
                <p>
                  SalesEdge exists for the founders in between: past initial traction, not yet ready for a full-time CRO. I embed as fractional leadership, design the go-to-market motion, and leave behind a team and a system that outlasts the engagement.
                </p>
              </div>
              <dl className="grid border-t border-l border-border sm:grid-cols-2">
                {factPairs.map((fact) => (
                  <div key={fact.label} className="border-r border-b border-border p-5">
                    <dt className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{fact.label}</dt>
                    <dd className="mt-3 text-base leading-7 text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 lg:px-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">SELECTED RESULTS</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <h2 className="font-display text-4xl font-light leading-tight text-foreground md:text-6xl">Results from six leadership roles, not floating numbers.</h2>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
                Every one of these was delivered from inside the business - as CRO, VP Sales, or Sales Director - not as an outside advisor.
              </p>
            </div>

            <div className="mt-12 border-t border-border">
              {resultRows.map((row) => (
                <article key={row.role} className="grid gap-5 border-b border-border py-7 md:grid-cols-[0.45fr_1.25fr_0.85fr_0.55fr] md:items-center">
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">{row.role}</p>
                  <div>
                    <h3 className="font-display text-3xl font-light text-foreground md:text-4xl">{row.company}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{row.subtitle}</p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground md:text-right">{row.tag}</p>
                  <p className="font-mono text-3xl font-medium tracking-normal text-foreground md:text-right md:text-4xl">{row.metric}</p>
                </article>
              ))}
            </div>

            <p className="mt-8 max-w-5xl font-display text-xl font-light italic leading-8 text-muted-foreground">
              Global App Testing: raised qualified-pipeline close rate from under 20% to 67.5% and retention by +38pts to 93%. JDX Consulting: built the technology sales division from zero, hiring a team of 18, ahead of sale to Delta Capital. Shape Security: grew EMEA pipeline by £5m ahead of the company's $1bn acquisition.
            </p>
          </div>
        </section>

        <section id="clients" className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 lg:px-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">CAREER HISTORY</p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
              {careerNames.map((name) => (
                <span key={name} className="font-display text-3xl font-light leading-none text-logo-muted md:text-5xl">{name}</span>
              ))}
            </div>
            <div className="mt-14 border-t border-border pt-12">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">ENTERPRISE DEALS CLOSED WITH</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-5">
                {enterpriseNames.map((name) => (
                  <span key={name} className="font-display text-3xl font-light leading-none text-logo-muted md:text-5xl">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-b border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 lg:px-8">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">SERVICES</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-[0.75fr_1fr] lg:items-end">
              <h2 className="font-display text-4xl font-light leading-tight text-foreground md:text-6xl">Four ways to engage.</h2>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
                Comprehensive GTM support tailored to your growth stage - scoped as a retainer, not a project.
              </p>
            </div>
            <div className="mt-12 border-t border-border">
              {services.map((service) => (
                <article key={service.title} className="grid gap-4 border-b border-border py-8 md:grid-cols-[0.75fr_1.25fr_0.45fr] md:items-start">
                  <h3 className="font-display text-3xl font-light text-foreground md:text-4xl">{service.title}</h3>
                  <p className="max-w-3xl text-base leading-7 text-muted-foreground">{service.description}</p>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent md:text-right">{service.format}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent-bright">LET'S TALK</p>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight text-primary-foreground md:text-6xl">Let's discuss your next stage of growth.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/72">
                Ready to scale your SaaS business? Tell me where you are and where you're trying to get to.
              </p>
              <a
                href="mailto:contact@salesedgeconsulting.co.uk"
                className="mt-10 flex max-w-xl flex-col gap-3 border-y border-border-dark py-5 font-mono text-sm uppercase tracking-wider text-primary-foreground transition-colors hover:text-accent-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:flex-row sm:items-center sm:justify-between"
              >
                <span>Email directly</span>
                <span>contact@salesedgeconsulting.co.uk →</span>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="grid gap-8 md:grid-cols-2">
                <label className="block font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent-bright" htmlFor="name">
                  Name
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    className="mt-3 h-12 rounded-none border-0 border-b border-border-dark bg-transparent px-0 font-sans text-base text-primary-foreground ring-offset-primary placeholder:text-primary-foreground/40 focus-visible:border-accent-bright focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />
                </label>
                <label className="block font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent-bright" htmlFor="email">
                  Work email
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className="mt-3 h-12 rounded-none border-0 border-b border-border-dark bg-transparent px-0 font-sans text-base text-primary-foreground ring-offset-primary placeholder:text-primary-foreground/40 focus-visible:border-accent-bright focus-visible:ring-0 focus-visible:ring-offset-0"
                    required
                  />
                </label>
              </div>
              <label className="block font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent-bright" htmlFor="company">
                Company &amp; ARR stage
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(event) => setFormData({ ...formData, company: event.target.value })}
                  className="mt-3 h-12 rounded-none border-0 border-b border-border-dark bg-transparent px-0 font-sans text-base text-primary-foreground ring-offset-primary placeholder:text-primary-foreground/40 focus-visible:border-accent-bright focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </label>
              <label className="block font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent-bright" htmlFor="goal">
                What's the growth goal?
                <Textarea
                  id="goal"
                  placeholder="Tell me where you're stuck..."
                  value={formData.goal}
                  onChange={(event) => setFormData({ ...formData, goal: event.target.value })}
                  className="mt-3 min-h-32 rounded-none border-0 border-b border-border-dark bg-transparent px-0 font-sans text-base text-primary-foreground ring-offset-primary placeholder:text-primary-foreground/40 focus-visible:border-accent-bright focus-visible:ring-0 focus-visible:ring-offset-0"
                  required
                />
              </label>
              <Button type="submit" size="lg" className="h-12 bg-accent-bright px-6 font-sans text-base font-medium text-primary hover:bg-accent-bright/90">
                Send message →
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-dark bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 font-mono text-xs uppercase tracking-wider text-primary-foreground/62 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 SalesEdge Consulting</p>
          <p>Fractional CRO &amp; GTM Advisory</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
