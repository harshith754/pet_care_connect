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
    <header className="w-full flex flex-col py-[40px] items-center justify-center bg-[url('/header@3x.png')] bg-cover bg-[top]">
      <div className=" rounded-81xl bg-aliceblue-100 flex flex-col py-[52px] px-[70px] items-center justify-center gap-5 max-w-[600px] sm:w-[80%] sm:px-0">
        
        <div className=" flex flex-col items-center justify-start gap-[10px] ">
          <div className=" relative font-semibold text-center leading-[60px] text-[40px] sm:text-[30px] sm:leading-[45px] text-darkslategray ">
            Find your new soulmate
          </div>
          <div className=" relative text-[25px] leading-[55px] sm:hidden font-puritan text-darkslategray text-center">
            Your Journey to Furry Companionship Begins Here
          </div>
        </div>

        <div className="px-5 sm:px-0 flex flex-wrap sm:flex-wrap sm:gap-0 items-center justify-center gap-[15px]">
            
            <DropdownMenu               
              value={city}
              options={[
                { label: "Mumbai City"  ,value: "Mumbai City" },
                { label: "Mumbai Suburban"  ,value: "Mumbai Suburban" },
                { label: "Pune"  ,value: "Pune" },
                {label: "Others"  , value: "Others" },
              ]}
              placeholder={"Enter your city"}
              handleClick={(value) => handleSelect(value, "city")}
              styles={"sm:w-[65%]"} 
            />

            <DropdownMenu               
              value={petType}
              options={[
                { label:"Dog", value: "Dog" },
                { label:"Cat",  value: "Cat" },
                { label:"Bird", value: "Bird" },
                { label:"Others", value: "Others" },
              ]}
              placeholder={"Select pet type"}
              handleClick={(value) => handleSelect(value, "petType")} 
              styles={"sm:w-[65%]"} 
            />
          

          
          <div className="flex flex-row justify-center items-center text-darkslategray px-2 py-2 rounded-lg text-[13px] w-[160px] sm:w-[65%] ">
            <input
              className="flex flex-row gap-3 justify-center items-center h-[30px] rounded-lg text-[13px] px-4 bg-white w-full text-gray-500 focus:outline-none focus:border-transparent "
              value={breed}
              placeholder="Enter pet breed"
              onChange={(e)=>{setBreed(e.target.value)}}
            >   
            </input>
          </div>
          <DropdownMenu               
              value={gender}
              options={[
                { label:"Male", value: "Male" },
                { label:"Female", value: "Female" },

              ]}
              placeholder={"Select pet gender"}
              handleClick={(value) => handleSelect(value, "gender")}           
              styles={"sm:w-[65%] "} 
          />

          <DropdownMenu               
            value={size}
            options={[
              { label:"Small", value: "Small" },
              { label:"Medium", value: "Medium" },
              { label:"Large",  value: "Large" },

            ]}
            placeholder={"Select pet size"}
            handleClick={(value) => handleSelect(value, "size")}           
            styles={"sm:w-[65%] "} 
          />

          <DropdownMenu               
            value={age}
            options={[
              { label:"Young", value: "Young" },
              { label:"Adult", value: "Adult" },
              { label:"Old", value: "Old" },
            ]}
            placeholder={"Select pet age"}
            handleClick={(value) => handleSelect(value, "age")}           
            styles={"sm:w-[65%] sm:hidden"} 
          />
        
          <div className=" flex flex-row sm:flex-col items-center justify-center gap-5 sm:gap-3 sm:mt-5">
            <Button
              className="flex justify-center cursor-pointer items-center text-[18px] text-white font-jua rounded-lg "
              style={{ width: "150px",height:"50px", backgroundColor:"#00ACE5"}}
              type="primary"
              size="middle"
              shape="default"
              onClick={handleSubmit}
              
            >
              Search
            </Button>
            <Button
              className="flex justify-center cursor-pointer items-center text-[18px] text-white font-jua rounded-lg "
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
