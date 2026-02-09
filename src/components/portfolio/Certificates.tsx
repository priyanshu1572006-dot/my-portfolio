import { Award, Download, ExternalLink } from 'lucide-react';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image?: string;
  link?: string;
  downloadLink?: string;
}

const Certificates = () => {
  // Placeholder certificates - will be populated by user later
  const certificates: Certificate[] = [];

  return (
    <section id="certificates" className="py-32 px-6 bg-muted/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Certifications
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Professional certifications demonstrating expertise and commitment to continuous learning
          </p>
        </div>

        {certificates.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-background border-2 border-border mb-6">
              <Award className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Certifications Coming Soon</h3>
            <p className="text-lg text-secondary max-w-md mx-auto">
              I'm currently organizing my professional certifications and credentials.
              This section will be updated with verified certifications shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {cert.image ? (
                  <div className="aspect-video overflow-hidden bg-muted border-b border-border">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
                    <Award className="w-16 h-16 text-primary/40" />
                  </div>
                )}

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-sm text-secondary">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                  </div>

                  <div className="flex gap-2">
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </a>
                    )}
                    {cert.downloadLink && (
                      <a
                        href={cert.downloadLink}
                        download
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-200"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
