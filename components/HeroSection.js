"use client"

import { Button } from "antd";
import Link from "next/link";

import { useRouter } from "next/navigation";
import NavbarH from "@/components/NavbarH";

const HeroSection = () => {
  
  const router = useRouter();

  return ( 
    <header className="w-full flex flex-col py-[22px] items-center justify-center bg-[url('/header1@3x.png')] bg-cover bg-[top]">
      
      <NavbarH />



      <div className="flex flex-col w-full py-[40px] items-center justify-center">
        <div className=" w-full flex flex-col items-center justify-center gap-[30px]">
          
          <div className="w-full flex flex-col items-center justify-center ">
            <div className="relative leading-[80px] font-semibold text-[50px] text-white font-radio-canada mt-[60px] text-center sm:text-[38px] sm:leading-[45px]">
              Find your new soulmate
            </div>
            <div className="relative text-[white] text-[28px] text-center leading-[60px] font-puritan sm:text-[23px] sm:leading-[30px] sm:mt-5 px-5">
  
              Your Journey to Furry Companionship Begins Here
            </div>
          </div>

      
          <div className="w-[70%] flex flex-row sm:flex-col rounded-lg bg-white py-1.5 px-0 pr-1.5 items-center justify-between sm:justify-center sm:py-3 sm:gap-2">
            <div className="w-full flex flex-wrap items-center justify-between sm:justify-center gap-2 text-sm px-5 sm:px-3">
              <input className="bg-slate-100 py-3 px-5 rounded-lg w-[40%] min-w-[180px] focus:outline-none focus:border-transparent"
                placeholder="Enter city"
              >
                
              </input>
              <input className="bg-slate-100 py-3 px-5 rounded-lg w-[40%] min-w-[180px] focus:outline-none focus:border-transparent"
                placeholder="Enter pet type"
              >
              </input>
              
            </div>
            <Button
              className="flex justify-center cursor-pointer items-center text-[18px] text-white font-jua rounded-xl "
              style={{ width: "150px",height:"50px", backgroundColor:"#00ACE5"}}
              type="primary"
              size="middle"
              shape="default"
              
            >
              Search
            </Button>
          </div>
  
        </div>
      </div>
     
    </header>
  );
};

export default HeroSection;
