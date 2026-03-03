import { siteTexts } from "@/data/content";
import { Check } from "lucide-react";

const WhyUsSection = () => {
  return (
    <section className="py-20 md:py-32 border-t border-border relative overflow-hidden">
      {/* Large decorative text */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[200px] md:text-[300px] font-display font-bold text-primary/[0.03] leading-none select-none pointer-events-none">
        WHY
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm font-medium tracking-widest uppercase text-primary">
                Для гостей
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">
              {siteTexts.whyTitle.split("?")[0]}
              <span className="text-primary">?</span>
            </h2>
          </div>

          {/* Right — reasons */}
          <div className="space-y-0">
            {siteTexts.whyReasons.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-5 border-b border-border group"
              >
                <div className="mt-0.5 w-6 h-6 border border-primary flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-base md:text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
