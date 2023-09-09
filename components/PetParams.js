"use client"
import { Button } from "antd";
import DropdownMenu from "@/components/DropdownMenu";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PetParams = ( {searchParams} ) => {

  


  const router = useRouter()

  const [city,setCity] = useState(searchParams.city || "");
  const [petType,setPetType] = useState(searchParams.petType || "");
  const [breed,setBreed] = useState(searchParams.breed || "");
  const [gender,setGender] = useState(searchParams.gender || "");
  const [size,setSize] = useState(searchParams.size || "");
  const [age,setAge] = useState(searchParams.age || "");

  const handleSelect = (value, identifier) => {
    if (identifier === "city") {
      setCity(value);
    } else if (identifier === "petType") {
      setPetType(value);
    } else if (identifier === "gender") {
      setGender(value)
    } else if (identifier === "size") {
      setSize(value)
    } else if (identifier === "age") {
      setAge(value)
    }
  };

  const handleSubmit =() => {
    const queryParams ={
      city,
      petType,
      breed,
      gender,
      size,
      age
    }
    const queryString = Object.entries(queryParams)
      .filter(([key, value]) => value !== '')
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join('&');


    router.push(`/find-pets?${queryString}`,{ scroll: false })
  }

  const resetAll = ()=>{
    setCity("")
    setPetType("")
    setBreed("")
    setGender("")
    setSize("")
    setAge("")

    router.push("/find-pets")
  }



  return (
    <header className="w-full flex flex-col py-[40px] items-center justify-center bg-[url('/header@3x.png')] bg-cover bg-[top] ">
      <div className=" rounded-81xl bg-aliceblue-100 flex flex-col py-[52px] px-[70px] items-center justify-center gap-5 max-w-[600px]">
        
        <div className=" flex flex-col items-center justify-start gap-[10px] md:max-w-full">
          <div className=" relative leading-[60px] font-semibold text-center text-[40px] text-darkslategray ">
            Find your new soulmate
          </div>
          <div className=" relative text-[25px] leading-[55px] font-puritan text-darkslategray">
            Your Journey to Furry Companionship Begins Here
          </div>
        </div>

        <div className="px-5 flex flex-row flex-wrap items-center justify-center gap-[15px]">
            
            <DropdownMenu               
              value={city}
              options={[
                { value: "Mumbai City" },
                { value: "Mumbai Suburban" },
                { value: "Pune" },
                { value: "Others" },
              ]}
              placeholder={"Enter your city"}
              handleClick={(value) => handleSelect(value, "city")} 
            />

            <DropdownMenu               
              value={petType}
              options={[
                { value: "Dog" },
                { value: "Cat" },
                { value: "Bird" },
                { value: "Others" },
              ]}
              placeholder={"Select pet type"}
              handleClick={(value) => handleSelect(value, "petType")} 
            />
          

          
          <div className="flex flex-row justify-center items-center text-darkslategray px-6 bg-white py-2 rounded-lg text-[13px]">
            <input
              className="flex flex-row gap-3 justify-center items-center min-w-[100px] w-8 text-[13px] text-gray-500 focus:outline-none focus:border-transparent placeholder-gray-500 font-times"
              value={breed}
              placeholder="Enter pet breed"
              onChange={(e)=>{setBreed(e.target.value)}}
            >   
            </input>
          </div>
          <DropdownMenu               
              value={gender}
              options={[
                { value: "Male" },
                { value: "Female" },

              ]}
              placeholder={"Select pet gender"}
              handleClick={(value) => handleSelect(value, "gender")}           
          />

          <DropdownMenu               
            value={size}
            options={[
              { value: "Small" },
              { value: "Medium" },
              { value: "Large" },

            ]}
            placeholder={"Select pet size"}
            handleClick={(value) => handleSelect(value, "size")}           
          />

          <DropdownMenu               
            value={age}
            options={[
              { value: "Young" },
              { value: "Adult" },
              { value: "Old" },
            ]}
            placeholder={"Select pet age"}
            handleClick={(value) => handleSelect(value, "age")}           
          />
        
          <div className=" flex flex-row items-center justify-center gap-5">
            <Button
              className="cursor-pointer text-[18px]"
              style={{ width: "150px",height:"50px", backgroundColor:"#00ACE5"}}
              type="primary"
              size="middle"
              shape="default"

              onClick={handleSubmit}
              
            >
              Search
            </Button>
            <Button
              className="cursor-pointer text-[18px]"
              style={{ width: "150px",height:"50px", backgroundColor:"#00ACE5"}}
              type="primary"
              size="middle"
              shape="default"

              onClick={resetAll}
              
            >
              Reset all
            </Button>
          </div>
    
      </div>

      </div>
   
    </header>
  )
}

export default PetParams
