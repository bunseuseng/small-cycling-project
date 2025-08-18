import CyclingNavigation from "@/components/CyclingNavigation";
import CyclingHero from "@/components/CyclingHero";
import TrainingProgress from "@/components/TrainingProgress";
import BikeShowcase from "@/components/BikeShowcase";
import StrongestCyclists from "@/components/StrongestCyclists";
import CyclingContact from "@/components/CyclingContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CyclingNavigation />
      <CyclingHero />
      <TrainingProgress />
      <BikeShowcase />
      <StrongestCyclists />
      <CyclingContact />
    </div>
  );
};

export default Index;
