import { CldImage } from 'next-cloudinary';

const DogCard = ({pet}) => {

  const imageUrl="https://res.cloudinary.com/dqqgraqee/image/upload/c_fill,w_250,h_280,g_auto/f_auto/q_auto/mslypfda0jzmvhzqti7s?_a=BAVAfUGd0/v1234"
  console.log(imageUrl)
  
  return (
    <div
      className={`rounded-xl w-[250px] h-[280px] flex flex-col items-end justify-end relative`}
      
    >

      <CldImage
        width={250}
        height={280}
        crop="fill"
        src={pet.imageId}
        alt="image"
        className="absolute rounded-xl flex flex-col box-border items-center justify-end"
      />
      <div className=" flex flex-col justify-center items-center gap-5 rounded-t-none rounded-b-xl bg-deepskyblue h-[70px] w-full z-10">
        <div className="w-full flex flex-col items-center justify-center ">
          <b className="relative tracking-[0.05em]  text-[20px] text-white">
            {pet.name}
          </b>
          <div className="relative text-[14px] font-jua text-white">
            {pet.breed}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default DogCard
