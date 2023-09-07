import { connectToDB } from "@/utils/database";
import Pet from "@/models/pet";

export const POST = async (req) => {

  const { name ,city ,petType ,breed ,age ,gender, size } = await req.json();

  try {
    await connectToDB();  //need to connect every time since its lambda function(will die after finishing job)
    const newPet = new Pet({
      name,
      city,
      petType,
      breed,
      age,
      gender,
      size
    })

    await newPet.save()

    return new Response(JSON.stringify(newPet), { status: 201} )
  } catch (error) {

    return new Response(error, { status: 500} )
  
  }
}
