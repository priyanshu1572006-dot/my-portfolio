const About = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              About Me
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg text-secondary leading-relaxed">
              I'm a passionate Data Analyst with expertise in transforming raw
              data into meaningful insights that drive strategic business
              decisions. With a strong foundation in statistical analysis and
              data visualization, I help organizations unlock the value hidden
              in their data.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              My approach combines technical proficiency with business acumen,
              ensuring that every analysis not only answers questions but also
              tells a compelling story. I specialize in creating intuitive
              dashboards and reports that make complex data accessible to all
              stakeholders.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Currently seeking opportunities to leverage data analytics to
              solve challenging problems and contribute to data-driven decision
              making in dynamic environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
