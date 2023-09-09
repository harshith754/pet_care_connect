"use client"

import Navbar from "@/components/Navbar";
import PetDisplay from "@/components/PetDisplay";
import PetParams from "@/components/PetParams";
import axios from "axios";
import { useEffect, useState } from "react";

const FindPet = ( { searchParams } ) => {

  const [pets,setPets] = useState([])
  const fetchPets = async () =>{

    const response = await axios.get('/api/pet', {
    })  

    setPets(response.data)

  }

  useEffect( () => {
    
    fetchPets()
  },[])

  
  return (
     
    <div>
      <Navbar />   
      <PetParams />

      <PetDisplay
        sectionTitle="Pets Near You"
        pets={pets}
      />

    </div>
   
  )
}

export default FindPet
