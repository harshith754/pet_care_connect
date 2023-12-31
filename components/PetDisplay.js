"use client"
import { Button } from "antd";
import DogCard from "@/components/DogCard";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';



const PetDisplay = ({sectionTitle, pets}) => {

  const [displayedPets,setDisplayedPets] = useState(7);
  const [showButton,setShowButton]=useState(pets.length <= 5? false : true);
  
  useEffect(()=>{
    if(pets.length > 5) setShowButton(true);
  },[pets])
  
  const handleLoadClick= ()=>{
    if(displayedPets+2 < pets.length ){
      setDisplayedPets((prev)=>prev+2)
    }
    else if(displayedPets+2 === pets.length){
      setDisplayedPets((prev)=>prev+2)
      setShowButton(false)
    }
    else {
      setDisplayedPets(pets.length)
      setShowButton(false)
    }
  }


  
  const staggerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.4, // Adjust the stagger delay as needed
      },
    },
  };

  const cardVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 ,  transition: { ease: "easeIn" }},
  };  

  return (
    <div className="bg-aliceblue-100 flex flex-col items-center justify-center py-[60px]">
      
      <div className="flex flex-col py-0 px-[30px] items-center justify-center ">
        <div className="relative leading-[48px] text-[45px] text-darkslategray font-radio-canada">
          {sectionTitle}
        </div>
      </div>

      <div className="relative bg-deepskyblue w-[28%] min-w-[200px] h-[2px] mt-2 mb-8" />
      
      {
        pets?.length===0 && (
          <div className="font-mono text-darkslategray text-[18px]">
            No pets found of specified parameters.
            Please re-enter the paremeters.
          </div>
        )
          
      }
      
      <motion.div
        className="flex flex-row flex-wrap justify-center gap-5 px-5"
        variants={staggerVariants}
        initial="initial"
        animate="animate"
      >
        {pets?.slice(0, displayedPets).map((pet) => (
          <motion.div
            key={pet._id}
            variants={cardVariants}
            
          >
            <DogCard pet={pet} />
          </motion.div>
        ))}
      </motion.div>
      
      
      {

        showButton &&

        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2, ease:'easeOut'},
          }}

          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            className=" mt-10 flex justify-center cursor-pointer items-center text-[18px] text-white font-jua rounded-xl bg-deepskyblue"
            style={{ width: "220px",height:"50px"}}
            type="primary"
            size="middle"
            shape="default"
            onClick={handleLoadClick}

            
          >
            Show More

          </Button>
        </motion.div>
       
      }
    </div>
  );
};

export default PetDisplay;
