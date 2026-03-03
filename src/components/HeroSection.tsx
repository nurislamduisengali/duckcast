import { siteTexts } from "@/data/content";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center grain-overlay overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-px h-[60%] bg-primary/20" />
      <div className="absolute bottom-32 left-12 w-[120px] h-px bg-primary/30" />
      <div className="absolute top-1/3 right-[15%] w-3 h-3 border border-primary rotate-45" />
      <div className="absolute bottom-1/4 left-[8%] w-2 h-2 bg-primary" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-primary" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">
              YouTube Подкаст из Алматы
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-display font-bold leading-[0.95] tracking-tight mb-8">
            {siteTexts.heroTitle.split("история").map((part, i) =>
              i === 0 ? (
                <span key={i}>
                  {part}
                  <span className="text-primary">история.</span>
                </span>
              ) : null
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-12 leading-relaxed">
            {siteTexts.heroSubtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/@Duckcast-1-i4r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Смотреть выпуски
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <button
              onClick={() => scrollTo("#collab")}
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-display font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Стать гостем
            </button>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-12 right-6 md:right-16 flex flex-col items-end gap-1">
          <div className="w-16 h-px bg-primary/40" />
          <div className="w-8 h-px bg-primary/20" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
