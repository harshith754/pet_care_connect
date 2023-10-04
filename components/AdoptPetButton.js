"use client"
import { Button } from 'antd'
import React from 'react'
import { toast } from 'sonner'


const AdoptPetButton = ({creator}) => {
  const adoptNow=()=>{
    if(creator){
      toast.success(`Sent Adoption request(demo) to ${creator.username} !!`)
    }
    else {
      toast.error('Creator currently unavailable... Try again later!!')
    }
  }
  return (
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
  )
}

export default AdoptPetButton
