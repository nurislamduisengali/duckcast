import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturedEpisode from "@/components/FeaturedEpisode";
import EpisodesGrid from "@/components/EpisodesGrid";
import GuestsSection from "@/components/GuestsSection";
import WhyUsSection from "@/components/WhyUsSection";
import TeamSection from "@/components/TeamSection";
import CollaborationSection from "@/components/CollaborationSection";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturedEpisode />
        <EpisodesGrid />
        <GuestsSection />
        <WhyUsSection />
        <TeamSection />
        <CollaborationSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default Index;
