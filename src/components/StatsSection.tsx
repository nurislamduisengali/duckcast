import { stats } from "@/data/content";

const StatsSection = () => {
  return (
    <section id="about" className="relative border-t border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`px-6 py-12 md:py-16 ${
                i < stats.length - 1 ? "border-r border-border" : ""
              }`}
            >
              <div className="text-3xl md:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
