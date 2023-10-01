import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { connectToDB } from "@/utils/database";
import Pet from "@/models/pet";
import User from '@/models/user'
import PetDisplay from '@/components/PetDisplay';
import CreateAdoptionSection from '@/components/LCreateAdoption';

const page =async ({params}) => {

  const userId=params.id


  const getCreator= async ()=>{
    await connectToDB(); 
    const user = await User.findById(userId);
    return user;
  }
  const getPets = async () => {
    await connectToDB(); 
     
    const pets = await Pet.find({}).populate('creator');


    const petObjects = pets.map((pet) => ({
      _id: pet._id.toString(), // convert ObjectId to string
      creator:  pet.creator && pet.creator._id ? {
        _id: pet.creator._id.toString(), // convert creator's _id to a string
        email: pet.creator.email,
        username: pet.creator.username,
        image: pet.creator.image,
        __v: pet.creator.__v
      } : null,
      city: pet.city,
      name: pet.name,
      breed: pet.breed,
      gender: pet.gender,
      size: pet.size,
      age: pet.age,
      imageId: pet.imageId,
      petType:pet.petType
      
    }));
    const filteredPets = petObjects.filter(pet => pet.creator?._id === userId);

    return filteredPets;
  }

  const creator =await getCreator();

  const pets = await getPets();
  
  
  return (
    <div className='bg-aliceblue-100 flex flex-col justify-center items-center'>
      <Navbar />

      <div className='text-[50px] text-center font-radio-canada text-darkslategray pt-5 '>

        User Profile

      </div>
      <div className="relative bg-deepskyblue w-[28%] min-w-[200px] h-[2px] mt-2 mb-8" />

        {creator && (
          <div className='flex-col justify-center items-center font-radio-canada text-darkslategray pb-6'>
            
              <div className="relative flex items-center justify-center ">
                Creator:   <Image
                  src={creator.image}
                  width={27}
                  height={27}
                  className="rounded-full ml-3 mr-[3px]"
                  alt="profile"
                /> 
                {creator.username}
                
              </div>
              <div className="relative flex items-center justify-center ">
                Email:   
                {`  ${creator.email}`}
                
              </div>


              {
                pets && (
                  <PetDisplay sectionTitle="Your Pets" pets={pets} />
                )
              }

          </div>
        )}

      <CreateAdoptionSection 
      />

    </div>
  )
}

export default page
