import { Github, Linkedin, Mail } from "lucide-react";

interface HeroProps {
  onViewProjects: () => void;
  onResumeClick: () => void;
}

const Hero = ({ onViewProjects, onResumeClick }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-secondary uppercase tracking-wider">
                Hi, I am
              </p>
              <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Priyanshu Shukla
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-secondary mt-4">
                Data Analyst
              </p>
            </div>

            <p className="text-lg text-secondary leading-relaxed max-w-xl">
              Transforming complex data into actionable insights that drive
              business decisions. Specialized in data visualization, statistical
              analysis, and building data-driven solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/priyanshu1572006-dot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-muted hover:scale-105 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-shukla-1ab61130a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-muted hover:scale-105 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:yourgmail@gmail.com "
                className="p-3 border border-border rounded-lg hover:bg-muted hover:scale-105 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={onViewProjects}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 hover:bg-primary/90 transition-all duration-200 shadow-sm"
              >
                View Projects
              </button>
              <button
                onClick={onResumeClick}
                className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Resume/CV
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
              <img
                src="/profile.jpg.png"
                alt="Priyanshu Shukla – Data Analyst"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
