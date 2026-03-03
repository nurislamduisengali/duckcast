import { guests } from "@/data/content";
import { ExternalLink } from "lucide-react";

const GuestsSection = () => {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2);

  return (
    <section id="guests" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-px bg-primary" />
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Гости
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">
          Кто уже <span className="text-primary">был у нас</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {guests.map((guest) => (
            <div
              key={guest.id}
              className="group relative border border-border hover:border-primary transition-colors p-5"
            >
              {/* Photo or placeholder */}
              <div className="w-full aspect-square bg-secondary mb-4 flex items-center justify-center overflow-hidden">
                {guest.photoUrl ? (
                  <img src={guest.photoUrl} alt={guest.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-display font-bold text-primary/30">
                    {getInitials(guest.name)}
                  </span>
                )}
              </div>
              <h3 className="font-display font-bold text-sm md:text-base mb-1">{guest.name}</h3>
              <p className="text-xs text-muted-foreground">{guest.achievement}</p>

              {guest.episodeUrl && (
                <a
                  href={guest.episodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                  aria-label={`Смотреть выпуск с ${guest.name}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestsSection;
