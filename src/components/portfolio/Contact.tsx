import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'priyanshu1572006@gmail.com',
      href: 'mailto:priyanshu1572006@gmail.com',
      color: 'text-blue-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'priyanshu-shukla',
      href: 'https://www.linkedin.com/in/priyanshu-shukla-1ab61130a/',
      color: 'text-blue-700',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'priyanshu1572006-dot',
      href: 'https://github.com/priyanshu1572006-dot',
      color: 'text-gray-800',
    },
  ];

  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or data challenges
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label !== 'Email' ? '_blank' : undefined}
                  rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group bg-background border-2 border-border rounded-xl p-8 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full bg-muted group-hover:bg-primary/10 transition-colors ${contact.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{contact.label}</h3>
                      <p className="text-sm text-secondary break-all">{contact.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-16 text-center p-8 bg-muted/50 rounded-2xl border border-border">
            <p className="text-lg text-secondary leading-relaxed">
              Whether you have a question, want to discuss a project, or just want to say hello,
              feel free to reach out. I'll do my best to get back to you as soon as possible!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
