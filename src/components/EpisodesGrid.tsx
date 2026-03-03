import { episodes } from "@/data/content";
import { Play } from "lucide-react";

const EpisodesGrid = () => {
  const recentEpisodes = episodes.slice(0, 6);

  return (
    <section id="episodes" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Выпуски
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Последние <span className="text-primary">эпизоды</span>
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentEpisodes.map((ep) => (
            <a
              key={ep.id}
              href={ep.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-border hover:border-primary transition-colors duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-secondary overflow-hidden">
                {ep.thumbnailUrl ? (
                  <img src={ep.thumbnailUrl} alt={ep.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-muted-foreground/15">DC</span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/20">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-4 h-4 text-primary-foreground ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-display font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                  {ep.guestName}
                </h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  {ep.guestRole}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {ep.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EpisodesGrid;
