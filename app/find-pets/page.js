"use client"

import Navbar from "@/components/Navbar";
import PetDisplay from "@/components/PetDisplay";
import PetParams from "@/components/PetParams";
import axios from "axios";
import { useEffect, useState } from "react";
const FindPet = ({ searchParams }) => {

  const { age, breed, city, gender, petType, size } = searchParams;
  const [allPets, setAllPets] = useState([]); // Store all pets
  const [filteredPets, setFilteredPets] = useState([]); // Store filtered pets

  const fetchPets = async () => {
    try {
      const response = await axios.get('/api/pet', {
        params: {
          petType, // Include petType as a query parameter
        },
      });
      setAllPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, [petType]); // Fetch pets based on petType

  useEffect(() => {
    // Filter pets based on props when any of these props change
    const filtered = allPets.filter((pet) => {
      const sanitizedBreed = breed ? breed.replace(/\s+/g, '') : ''; // Remove spaces if breed is defined
      const sanitizedPetBreed = pet.breed.replace(/\s+/g, '');

      return (
        (!age || pet.age === age) &&
        (!breed || new RegExp(sanitizedBreed.toLowerCase()).test(sanitizedPetBreed.toLowerCase())) &&
        (!city || pet.city === city) &&
        (!gender || pet.gender === gender) &&
        (!petType || pet.petType === petType) &&
        (!size || pet.size === size)
      );
    });
    setFilteredPets(filtered);
  }, [age, breed, city, gender, petType, size, allPets]);

  return (
    <div>
      <Navbar />
      <PetParams searchParams={searchParams} />
      <PetDisplay sectionTitle="Pets Near You" pets={filteredPets} />
    </div>
  );
};


export default FindPet
