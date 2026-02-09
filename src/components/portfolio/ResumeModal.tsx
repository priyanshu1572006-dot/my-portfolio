import { X, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  if (!isOpen) return null;

  // Placeholder state - will be updated when user adds resume
  const hasResume = false;
  const resumePdfUrl = '';
  const cvPdfUrl = '';
  const videoResumeUrl = '';

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className="relative bg-background rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-10">
          <h2 className="text-4xl font-bold mb-2">Resume & CV</h2>
          <p className="text-lg text-secondary mb-8">
            Download my professional documents or watch my video introduction
          </p>

          {!hasResume ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                <FileText className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Resume Coming Soon</h3>
              <p className="text-lg text-secondary max-w-md mx-auto">
                I'm currently finalizing my resume and CV documents.
                They will be available for download here shortly.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Download Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumePdfUrl && (
                  <a
                    href={resumePdfUrl}
                    download
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 hover:scale-105 transition-all duration-200"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume (PDF)
                  </a>
                )}
                {cvPdfUrl && (
                  <a
                    href={cvPdfUrl}
                    download
                    className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  >
                    <Download className="w-5 h-5" />
                    Download CV (PDF)
                  </a>
                )}
              </div>

              {/* PDF Preview */}
              {resumePdfUrl && (
                <div className="border-2 border-border rounded-xl overflow-hidden">
                  <div className="bg-muted px-6 py-3 border-b border-border">
                    <p className="font-medium">Resume Preview</p>
                  </div>
                  <div className="aspect-[8.5/11] bg-white">
                    <iframe
                      src={resumePdfUrl}
                      className="w-full h-full"
                      title="Resume Preview"
                    />
                  </div>
                </div>
              )}

              {/* Video Resume */}
              {videoResumeUrl && (
                <div>
                  <h3 className="text-2xl font-bold mb-4">Video Introduction</h3>
                  <div className="aspect-video rounded-xl overflow-hidden bg-black border border-border">
                    <iframe
                      src={videoResumeUrl}
                      className="w-full h-full"
                      title="Video Resume"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
