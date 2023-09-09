"use client"

import DropdownMenu from '@/components/DropdownMenu'
import Navbar from '@/components/Navbar'
import { Button } from 'antd'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CldImage, CldUploadButton } from 'next-cloudinary';

import { useSession} from 'next-auth/react'
import { useRouter } from 'next/navigation'

const page = () => {
  const { data: session }= useSession();

  const router = useRouter();

  useEffect(()=>{
    if(session === null ){
    
      alert('You Must Login First!!')
      router.push('/api/auth/signin')
      
    }
  },[])
  const [name,setName] = useState("");
  const [city,setCity] = useState("");
  const [petType,setPetType] = useState("");
  const [breed,setBreed] = useState("");
  const [gender,setGender] = useState("");
  const [size,setSize] = useState("");
  const [age,setAge] = useState("");
  const [imageId,setImageId]= useState("");

  const [submitting,setSubmitting] =useState(false)

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

  const handleSubmit=async (e)=>{
    e.preventDefault();
    setSubmitting(true);

    try{

      const postData= JSON.stringify({
        name,
        city,
        petType,
        breed,
        age,
        gender,
        size,
        userId: session?.user.id || "none",
        imageId
      })

      const response = await axios.post('/api/pet/new', postData)

      console.log(response);

      if(response.status === 201) {
        router.push('/');
      }

    } catch(error) {
      console.log(error)
    } finally {
      setSubmitting(false);
    }

  }

  
  return (
  <>
    <Navbar />
    
    <header className="w-full flex flex-col items-center justify-center  gap-8 bg-[url('/-body@3x.png')] bg-cover bg-[top] top-0 text-white pb-8">
    
      <div className="pt-[60px] flex flex-col items-center justify-start gap-[16px] font-radio-canada">
        <div className=" leading-[70px] font-semibold text-[50px]">
          Place Pet for adoption
        </div>
        <div className=" leading-[20px] font-puritan text-[25px]">
          Open new doors for your pet.
        </div>
      </div>

      <div className="bg-aliceblue-100 px-5 py-4 pt-8 flex flex-col items-center justify-center gap-[15px] rounded-xl">
        
        

        { 
          imageId ?
            (<CldImage
              width={250}
              height={280}
              crop="fill"
              src={imageId}
              alt="image"
              className="rounded-lg flex flex-col box-border items-center justify-end"
            />) :

            (
              <CldUploadButton
                onUpload={( result )=> {
                  setImageId(result.info.public_id)
                }}
                uploadPreset="artPage"
                className='w-[80%] text-gray-500 px-6 bg-white py-2 rounded-lg font-times'
              >
                Upload an Image
              </CldUploadButton>
            )
          
        }


        <div className="flex flex-row justify-center items-center px-6 bg-white py-2 rounded-lg text-[13px] w-[80%] " >
          
          
          <input
            className="flex flex-row gap-3 justify-center items-center min-w-[100px] w-10 text-[13px] text-gray-500 focus:outline-none focus:border-transparent placeholder-gray-500 font-times"
            value={name}
            placeholder="Enter pet name"
            onChange={(e)=>{setName(e.target.value)}}
          >   
          </input>
        </div>
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
          styles={"w-[80%]"}
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
          styles={"w-[80%]"}

        />
        <div className="flex flex-row justify-center items-center text-darkslategray px-6 bg-white py-2 rounded-lg text-[13px] w-[80%]">
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
          styles={"w-[80%]"}
         
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
          styles={"w-[80%]"}
 
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
          styles={"w-[80%]"}
       
        />
        
        <div className=" flex flex-row items-center justify-center p-3 py-5">
          <Button
            className="flex justify-center cursor-pointer items-center text-[20px] text-white font-jua rounded-xl px-8 py-8"
            style={{ backgroundColor:"#00ACE5" }}
            type="primary"
            size="middle"
            shape="default"
            onClick={(e)=>handleSubmit(e)}
          >
            {submitting? 'Sending pet Information...':'Create Pet Adoption Listing!!'}
          </Button>
        </div>


      </div>


        

    </header>

  </>  
  )
}

export default page
