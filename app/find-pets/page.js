import Navbar from "@/components/Navbar";
import PetDisplay from "@/components/PetDisplay";
import PetParams from "@/components/PetParams";
const CreatePet = () => {
  return (
     
    <div>
      <Navbar />   
      <PetParams />

      <PetDisplay 
        sectionTitle={"Pets For You ❤️"}
      />

    </div>
   
  )
}

export default CreatePet
