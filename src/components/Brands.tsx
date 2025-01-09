import Image from "next/image";

interface BrandsProps {
  brandImage: string,
  brandName: string
}

export default function Brands({brandImage, brandName}:BrandsProps) {
  return (
    <div 
      className="w-[145px] border-gray-500 border-2 flex flex-col items-center 
        p-3 rounded-xl hover:scale-110 duration-300"
    >
      <Image src={brandImage} width={141} height={141} alt="Nome da marca" />
      <h6>{brandName}</h6>
    </div>
  )
}
