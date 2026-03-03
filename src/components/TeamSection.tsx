import { team } from "@/data/content";

const TeamSection = () => {
  const getInitials = (name: string) =>
    name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <section id="team" className="py-20 md:py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-px bg-primary" />
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Команда
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">
          Кто <span className="text-primary">за этим</span> стоит
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.id} className="border border-border p-6 group hover:border-primary transition-colors">
              {/* Photo */}
              <div className="w-full aspect-[4/5] bg-secondary mb-5 flex items-center justify-center overflow-hidden">
                {member.photoUrl ? (
                  <img src={member.photoUrl} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-4xl font-display font-bold text-primary/20">
                    {getInitials(member.name)}
                  </span>
                )}
              </div>
              <div className="text-xs uppercase tracking-widest text-primary mb-2 font-medium">
                {member.role}
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
