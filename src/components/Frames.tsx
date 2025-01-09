import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";

interface FramesProps {
  frameImage: string
  frameName: string
}

export default function Frames({frameImage, frameName}:FramesProps) {
  return(
    <article className="group">
      <figure className="rounded-t-[20px] overflow-hidden w-[320px] relative">
        <Image 
          src={frameImage} 
          width={320} 
          height={248} 
          alt="Ambiente sala"
          className="group-hover:scale-125 group-hover:brightness-50 duration-300"
        />
        <h3
          className="flex items-center gap-2 absolute top-[50%] left-[9%] 
          text-transparent group-hover:text-white duration-300"
        >
          Selecionar este ambiente
          <FaLongArrowAltRight size={25} />
        </h3>
      </figure>
      <div 
        className="bg-primaryColor rounded-b-[20px] py-3 text-center w-[320px]"
      >
        <h2 className="font-bold text-white group-hover:text-secondaryColor duration-300">
          {frameName}
        </h2>
      </div>
    </article>
  )
}