const SiteFooter = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-lg font-bold tracking-tight">
          <span className="text-primary">DUCK</span>CAST
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} DuckCast. Алматы, Казахстан.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
