import React from "react";

interface RoomImageProps {
  ReferenceHall: string;
  ReferenceFloor: string;
}

export default function BedRoomImage({
  ReferenceHall,
  ReferenceFloor,
}: RoomImageProps) {
  return (
    <section id="hallFloor" className=" overflow-hidden w-full shadow-xl">
      <figure className='h-full w-full relative'>
        <img src="/bedRoomBg.png" className='relative z-40'/>

        <div id='hall'
          className='absolute bottom-0 h-full w-full bg-amber-700'
          style={{
            backgroundImage: `url(${ReferenceHall})`,
          }}
        ></div>

        <div className="kitchenFloor">
          <div
            id="floor"
            style={{
              backgroundImage: `url(${ReferenceFloor})`,
              transform: "rotateX(54deg) translateY(298px) translateX(-214px)",
            }}
            className="absolute bottom-0 h-[620px] w-[2400px]  left-0 z-20"
          ></div>
        </div>
      </figure>
    </section>
  );
}
