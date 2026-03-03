import { siteTexts, socialLinks } from "@/data/content";

const CollaborationSection = () => {
  return (
    <section id="collab" className="py-20 md:py-32 border-t border-border relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-primary/30" />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-12 h-px bg-primary" />
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Сотрудничество
          </span>
          <div className="w-12 h-px bg-primary" />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
          {siteTexts.collaborationTitle}
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          {siteTexts.collaborationText}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Instagram
          </a>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-display font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            YouTube
          </a>
          <a
            href={socialLinks.contact}
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-muted-foreground font-display font-bold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
          >
            Связаться
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
