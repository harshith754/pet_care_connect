import { CldImage } from 'next-cloudinary';

const DogCard = ({pet}) => {

  const imageUrl="https://res.cloudinary.com/dqqgraqee/image/upload/c_fill,w_250,h_280,g_auto/f_auto/q_auto/mslypfda0jzmvhzqti7s?_a=BAVAfUGd0/v1234"
  
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
      <div className=" flex flex-col justify-center items-center gap-7 rounded-t-none rounded-b-xl bg-deepskyblue h-[70px] w-full z-10 py-1">
        <div className="w-full flex flex-col items-center justify-center ">
          <b className="relative tracking-[0.05em]  text-[20px] text-white">
            {pet.name}
          </b>
          <div className="relative text-[14px] font-jua text-white">
              {pet.breed}
            </div>
          <div className='flex flex-row justify-center items-center text-normal font-istok-web leading-3 '>
             
            <div className="flex justify-center items-center text-center font-istok-web text-[11px] text-white w-12">
              {pet.gender}
            </div>
            <div className='bg-white w-[1px] h-4' />

            <div className="flex justify-center items-center text-center  font-istok-web text-[11px] text-white w-12">
              {pet.size}
            </div>
            <div className='bg-white w-[1px] h-4' />
            <div className="flex justify-center items-center text-center  font-istok-web text-[11px] text-white w-12">
              {pet.age}
            </div>
            <div className='bg-white w-[1px] h-4' />
            <div className="flex justify-center items-start text-center font-istok-web text-[10px] text-white w-12">
              {pet.city}
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  )
}

export default DogCard
