import { connectToDB } from "@/utils/database";
import Pet from "@/models/pet";

//route "/api/pet"

export const GET = async (req,{params}) => {

  const {id} = params;

  try {
    await connectToDB();  
    
    const pet = await Pet.findById(id).populate('creator');

    return new Response(JSON.stringify(pet), { status: 200} )
  } catch (error) {

    return new Response(error, { status: 500} )
  
  }
}
