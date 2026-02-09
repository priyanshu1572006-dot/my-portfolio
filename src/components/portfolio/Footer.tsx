const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <div>
            <h3 className="text-xl font-bold">Priyanshu Shukla</h3>
            <p className="text-sm text-secondary mt-1">Data Analyst</p>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} All rights reserved
          </div>

          <div className="text-xs text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
