const Footer = () => (
  <footer className="site-footer">
    <div className="container mx-auto flex flex-col gap-3 px-5 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:text-left">
      <p className="text-sm text-tech-slate">
        © {new Date().getFullYear()} Faisal Imtiaz
      </p>
      <p className="font-mono text-xs text-tech-slate/70">Designed & built with care.</p>
    </div>
  </footer>
);

export default Footer;
