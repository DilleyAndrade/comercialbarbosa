import Image from 'next/image'

interface FloorsProps {
  stoneImage: string,
  stoneName: string,
  stoneSize: string
}

export default function Floors({stoneImage, stoneName, stoneSize}:FloorsProps) {
  return (
    <div className='flex flex-col items-center bg-white shadow rounded-b-xl pb-3 hover:scale-105 duration-300'>
      <Image src={stoneImage} width={140} height={120} alt='Nome pedra' />
      <h6 className='mt-3 -mb-1'>{stoneName}</h6>
      <h6>{stoneSize}</h6>
    </div>
  )
}
