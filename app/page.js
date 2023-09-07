import HeroSection from "@/components/HeroSection";
import PetDisplay from "@/components/PetDisplay";
import PlansSection from "@/components/LPlans";
import CreateAdoptionSection from "@/components/LCreateAdoption";

const LandingPage = () => {
  

  return (
    <main className="bg-aliceblue-100 w-full flex flex-col items-center justify-center">
      <HeroSection />
      <div className="w-full relative bg-deepskyblue h-[5px]" />
      <PetDisplay
        sectionTitle="Pets Near You"
      />
      <div className="w-full relative bg-deepskyblue h-[5px]" />
      <PlansSection />
      <div className="w-full relative bg-deepskyblue h-[5px]" />
      <CreateAdoptionSection />
    </main>
  );
};

export default LandingPage;
