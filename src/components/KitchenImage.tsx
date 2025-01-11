import React from 'react'

interface KitchenImageProps {
  ReferenceHall: string;
  ReferenceFloor: string;
}

export default function KitchenImage({ReferenceHall, ReferenceFloor}:KitchenImageProps) {
  return (
    
    <section id="hallFloor" className=" overflow-hidden w-full shadow-xl">
      <figure className='h-full w-full relative'>
        <img src="/kitchenBg.png" className='relative z-40'/>

        <div id='hall'
          className='absolute top-0 h-2/4 w-full bg-white'
          style={{
            backgroundImage: `url(${ReferenceHall})`,
          }}
        ></div>

        <div className="kitchenFloor">
          <div
            id="floor"
            style={{
              backgroundImage: `url(${ReferenceFloor})`,
              transform: "rotateX(54deg) translateY(160px)",
            }}
            className="absolute bottom-0 h-[450px] w-full  left-0 z-20"
          ></div>
        </div>
      </figure>
    </section>
  )
}
