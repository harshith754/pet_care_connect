"use client"

import Navbar from '@/components/Navbar'
import { Button } from 'antd'
import axios from 'axios'
import { CldImage } from 'next-cloudinary'
import React, { useEffect, useState } from 'react'


const page = ({params}) => {
  const {id}=params

  const [pet,setPet]=useState(null)

  const fetchPetInfo= async ()=>{
    const res=await axios.get(`/api/pet/${id}`)
    console.log(res.data)
    setPet(res.data)
  }

  useEffect(()=>{
    fetchPetInfo();
  },[])

  const adoptNow=()=>{
    alert("Sent Adoption request(demo) !!")

  }

  return (
    <div className="relative bg-white w-full flex flex-col items-center justify-center text-center text-darkslategray font-radio-canada">
      <Navbar />
      <div className=" bg-aliceblue-100 flex flex-col items-center justify-center gap-2 pt-5 w-full">
          <div className=" relative leading-[48px] text-[40px] sm:text-[30px]">
            {
              pet? (
                `${pet.name} - ${pet.petType}`
              ):(
                "Name - Type"
              )
            }
            
          </div>
        
        { 
          pet? (
            <CldImage
              width={250}
              height={280}
              crop="fill"
              src={pet.imageId}
              alt="image"
              className="rounded-lg flex flex-col box-border items-center justify-end"
            />
          ):(
            "Loading..."
          )
           
        }

        

        <div className=" bg-white w-full flex flex-col items-center justify-center ">
          <div className="relative bg-deepskyblue w-[35%] h-[3px] " />

          <div className=" flex flex-col pb-0 items-center ">
            <div className=" flex flex-row p-2.5 items-center text-[22px]  ">
            {
              pet? (
                `${pet.breed} - ${pet.city}`
              ):(
                "Breed - City"
              )
            }
            </div>
            <div className=" relative bg-deepskyblue h-[1px] w-[40%]" />
            
            <div className=" flex flex-col pt-2.5 px-0 pb-0 items-center justify-center text-[18px] leading-[40px] ">
              <div className="relative flex items-center justify-center ">
                
                {
                  pet? (
                    `Age: ${pet.age}`
                  ):(
                    "Age"
                  )
                }
              </div>
              <div className="relative flex items-center justify-center ">
                
                {
                  pet? (
                    `Gender: ${pet.gender} `
                  ):(
                    "Gender"
                  )
                }
              </div>
              <div className="relative flex items-center justify-center ">
                
                {
                  pet? (
                    `Size: ${pet.size}`
                  ):(
                    "Size"
                  )
                }
              </div>

            </div>
          </div>
          <div className=" flex flex-row items-center justify-center p-3 py-5">
            <Button
              className="flex justify-center cursor-pointer items-center text-[20px] text-white font-jua rounded-xl px-12 sm:px-8 py-8 w-[80%] sm:text-[14px] "
              style={{ backgroundColor:"#00ACE5" }}
              type="primary"
              size="middle"
              shape="default"
              onClick={adoptNow}
            >
              Adopt Now!!
            </Button>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default page
