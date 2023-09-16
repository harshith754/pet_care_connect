import HeroSection from "@/components/HeroSection";
import PetDisplay from "@/components/PetDisplay";
import PlansSection from "@/components/LPlans";
import CreateAdoptionSection from "@/components/LCreateAdoption";

import { connectToDB } from "@/utils/database";
import Pet from "@/models/pet";

export const dynamic = 'force-dynamic';


const fetchPets = async () =>{
  await connectToDB();    
  const pets = await Pet.find({});
  
  const petObjects = pets.map((pet) => ({
    _id: pet._id.toString(), // convert ObjectId to string
    creator: pet.creator.toString(),
    city: pet.city,
    name: pet.name,
    breed: pet.breed,
    gender: pet.gender,
    size: pet.size,
    age: pet.age,
    imageId: pet.imageId,
    
  }));

  return petObjects;
} 



const LandingPage = async () => {
  const petObjects = await fetchPets();

  return (
    <main className="bg-aliceblue-100 w-full flex flex-col items-center justify-center">
      <HeroSection />
      <div className="w-full relative bg-deepskyblue h-[5px]" />
      <PetDisplay
        sectionTitle="Pets Near You"
        pets={petObjects}
      />
      <div className="w-full relative bg-deepskyblue h-[5px]" />
      <PlansSection />
      <div className="w-full relative bg-deepskyblue h-[5px]" />
      <CreateAdoptionSection />
    </main>
  );
};

export default LandingPage;
