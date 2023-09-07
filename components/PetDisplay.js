import { Button } from "antd";
import DogCard from "@/components/DogCard";

const PetDisplay = ({
  sectionTitle,
}) => {

  return (
    <div className="bg-aliceblue-100 flex flex-col items-center justify-center py-[60px]">
      
      <div className="flex flex-col py-0 px-[30px] items-center justify-center ">
        <div className="relative leading-[48px] text-[45px] text-darkslategray font-radio-canada">
          {sectionTitle}
        </div>
      </div>

      <div className="relative bg-deepskyblue w-[28%] min-w-[200px] h-[2px] mt-2 mb-8" />
      
      <div className="flex flex-row flex-wrap justify-center gap-5  px-5">
        
        
          <DogCard 
            
          />
          <DogCard />
          <DogCard />
          <DogCard />
          <DogCard />
          <DogCard />
          <DogCard />
          
      
      </div>
      <Button
        className="cursor-pointer mt-10 text-[20px] font-jua "
        style={{ width: "220px",height:"50px",backgroundColor:"#00ACE5" }}
        type="primary"
        size="middle"
        shape="default"
       
      >
        Show More
      </Button>
    </div>
  );
};

export default PetDisplay;
