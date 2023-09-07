import React from 'react'
import { useMemo } from "react";

const DogCard = () => {
  const propBackgroundImage="url('/dogcard1@3x.png')"

  const dogCardStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);
  return (
    <div
      className="rounded-xl w-[250px] h-[280px] flex flex-row items-end justify-center bg-[url('/dogcard@3x.png')] bg-cover bg-[center]"
      style={dogCardStyle}
    >
      <div className=" flex flex-col justify-center items-center gap-5 rounded-t-none rounded-b-xl bg-deepskyblue h-[70px] w-full ">
        <div className="w-full flex flex-col items-center justify-center ">
          <b className="relative tracking-[0.05em]  text-[20px] text-white">
            Stevie
          </b>
          <div className="relative text-[14px] font-jua text-white">
            German Shepherd
          </div>
        </div>
      </div>
    </div>
  )
}

export default DogCard
