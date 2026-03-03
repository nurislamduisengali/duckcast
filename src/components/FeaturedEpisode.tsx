import { episodes, type Episode } from "@/data/content";
import { Play } from "lucide-react";

const FeaturedEpisode = () => {
  const featured = episodes.find((e) => e.featured) || episodes[0];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-px bg-primary" />
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Последний выпуск
          </span>
        </div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-12 items-start">
          {/* Video preview */}
          <a
            href={featured.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video bg-secondary border border-border overflow-hidden"
          >
            {featured.thumbnailUrl ? (
              <img
                src={featured.thumbnailUrl}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                <div className="text-6xl font-display font-bold text-muted-foreground/20">DC</div>
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <Play className="w-7 h-7 text-primary-foreground ml-1" />
              </div>
            </div>
            {/* Yellow corner accent */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
          </a>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-primary mb-4 font-medium">
              Эпизод #{featured.id.replace("ep-", "")}
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 leading-tight">
              {featured.guestName}
            </h3>
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
              {featured.guestRole}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {featured.description}
            </p>
            <a
              href={featured.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors self-start"
            >
              Смотреть на YouTube
              <Play className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEpisode;
