"use client";
import Brands from "@/components/Brands";
import Floors from "@/components/Floors";
import KitchenImage from "@/components/KitchenImage";
import { floors } from "@/data/floors";
import Link from "next/link";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

export default function Kitchen() {
  const [catalogIsOpen, setcatalogIsOpen] = useState(true);
  const [catalogBrandIsOpen, setCatalogBrandIsOpen] = useState(true);
  const [catalogFloorIsOpen, setCatalogFloorIsOpen] = useState(false);

  const [stelaSetIsOpen, setStelaSetIsOpen] = useState(false);
  const [almeidaSetIsOpen, setAlmeidaSetIsOpen] = useState(false);
  const [rochaForteSetIsOpen, setRochaForteSetIsOpen] = useState(false);
  const [pamesaSetIsOpen, setPamesaSetIsOpen] = useState(false);
  const [elizabethSetIsOpen, setElizabethSetIsOpen] = useState(false);
  const [arielleSetIsOpen, setArielleSetIsOpen] = useState(false);

  const [changeHall, setChangeHall] = useState(false);
  const [changeFloor, setChangeFloor] = useState(true);
  const [stoneReferenceHall, setStoneReferenceHall] = useState(
    "/floors/arielle/nordGray.jpg"
  );
  const [stoneReferenceFloor, setStoneReferenceFloor] = useState(
    "/floors/arielle/lirioLux.jpg"
  );

  return (
    <section className=" h-[100vh] flex items-center justify-center">
      
      <Link
        id="backButton"
        href="/"
        className="bg-white shadow p-3 flex flex-col items-center rounded-[10px]
          absolute z-50 top-20 left-11 hover:scale-110 duration-300"
      >
        <figure>
          <FaHouseChimney size={25} />
        </figure>
        <h6 className="font-bold text-black">Início</h6>
      </Link>

      {catalogIsOpen && (
        <div
          id="catalog"
          className="bg-white shadow p-5 rounded-[20px] absolute z-50 top-11 right-11 w-[360px] h-[600px]"
        >
          <header className="w-full flex items-center justify-between border-b-4 border-black">
            <div className="flex items-center gap-2">
              <HiOutlineSquares2X2 size={24} />
              <h2>Catálogo</h2>
            </div>
            <button
              onClick={() => {
                setcatalogIsOpen(false);
              }}
              className="text-[40px] hover:rotate-180 duration-300"
            >
              X
            </button>
          </header>

          {catalogBrandIsOpen && (
            <main className="text-center">
              <h3 className="font-bold mt-5">Escolha a marca que deseja</h3>

              <section
                id="brandsShow"
                className="mt-10 py-5 flex flex-wrap gap-3 items-center justify-center 
                  overflow-auto h-[400px]"
              >
                <button id="brandStela"
                  onClick={() => {
                    setCatalogBrandIsOpen(false);
                    setCatalogFloorIsOpen(true);
                    setStelaSetIsOpen(true);
                  }}
                >
                  <Brands
                    brandImage="/brands/stela.png"
                    key="/brands/stela.png"
                    brandName="Stela"
                  />
                </button>

                <button id="brandAlmeida"
                  onClick={() => {
                    setCatalogBrandIsOpen(false);
                    setCatalogFloorIsOpen(true);
                    setAlmeidaSetIsOpen(true);
                  }}
                >
                  <Brands
                    brandImage="/brands/almeida.png"
                    key="/brands/almeida.png"
                    brandName="Almeida"
                  />
                </button>

                <button id="brandRochaForte"
                  onClick={() => {
                    setCatalogBrandIsOpen(false);
                    setCatalogFloorIsOpen(true);
                    setRochaForteSetIsOpen(true);
                  }}
                >
                  <Brands
                    brandImage="/brands/rochaForte.png"
                    key="/brands/rochaForte.png"
                    brandName="Rocha Forte"
                  />
                </button>

                <button id="brandPamesa"
                  onClick={() => {
                    setCatalogBrandIsOpen(false);
                    setCatalogFloorIsOpen(true);
                    setPamesaSetIsOpen(true);
                  }}
                >
                  <Brands
                    brandImage="/brands/pamesa.png"
                    key="/brands/pamesa.png"
                    brandName="Pamesa"
                  />
                </button>

                <button id="brandElizabeth"
                  onClick={() => {
                    setCatalogBrandIsOpen(false);
                    setCatalogFloorIsOpen(true);
                    setElizabethSetIsOpen(true);
                  }}
                >
                  <Brands
                    brandImage="/brands/elizabeth.png"
                    key="/brands/elizabeth.png"
                    brandName="Elizabeth"
                  />
                </button>

                <button id="brandArielle"
                  onClick={() => {
                    setCatalogBrandIsOpen(false);
                    setCatalogFloorIsOpen(true);
                    setArielleSetIsOpen(true);
                  }}
                >
                  <Brands
                    brandImage="/brands/arielle.png"
                    key="/brands/arielle.png"
                    brandName="Arielle"
                  />
                </button>
              </section>
            </main>
          )}

          {catalogFloorIsOpen && (
            <main className="flex flex-col items-center gap-5">
              <h3 className="font-bold mt-5">O que deseja alterar?</h3>
              <div className="font-bold flex gap-4">
                <button
                  onClick={() => {
                    setChangeFloor(true);
                    setChangeHall(false);
                  }}
                  className={
                    changeFloor
                      ? "py-1 rounded-xl border-red-500 border-[3px] w-[111px]"
                      : "py-1 rounded-xl border-gray-300 border-[3px]  w-[111px]"
                  }
                >
                  Piso
                </button>

                <button
                  onClick={() => {
                    setChangeFloor(false);
                    setChangeHall(true);
                  }}
                  className={
                    changeHall
                      ? "py-1 rounded-xl border-red-500 border-[3px]  w-[111px]"
                      : "py-1 rounded-xl border-gray-300 border-[3px]  w-[111px]"
                  }
                >
                  Parede
                </button>
              </div>
              

              {stelaSetIsOpen && (
                <div>
                  <div className="flex items-center justify-between">
                    <button
                      className="flex p-2 shadow rounded-[10px]"
                      onClick={() => {
                        setCatalogFloorIsOpen(false);
                        setCatalogBrandIsOpen(true);
                        setStelaSetIsOpen(false);
                      }}
                    >
                      <FaLongArrowAltLeft size={25} />
                      Voltar
                    </button>
                    <h1 className="font-bold">Stela</h1>
                  </div>

                  <div className="overflow-auto">
                    <div className="h-[250px] w-full ">
                      <div className="flex items-center">
                        <h6>Cerâmicas</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "stela" &&
                            floor.type === "Cerâmica" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                      <div className="flex items-center">
                        <h6>Revestimentos</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-10 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "stela" &&
                            floor.type === "Revestimento" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {almeidaSetIsOpen && (
                <div>
                  <div className="flex items-center justify-between">
                    <button
                      className="flex p-2 shadow rounded-[10px]"
                      onClick={() => {
                        setCatalogFloorIsOpen(false);
                        setCatalogBrandIsOpen(true);
                        setAlmeidaSetIsOpen(false);
                      }}
                    >
                      <FaLongArrowAltLeft size={25} />
                      Voltar
                    </button>
                    <h1 className="font-bold">Almeida</h1>
                  </div>

                  <div className="overflow-auto">
                    <div className="h-[250px] w-full ">
                      <div className="flex items-center">
                        <h6>Cerâmicas</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "almeida" &&
                            floor.type === "Cerâmica" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                      <div className="flex items-center">
                        <h6>Revestimentos</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "almeida" &&
                            floor.type === "Revestimento" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {rochaForteSetIsOpen && (
                <div>
                  <div className="flex items-center justify-between">
                    <button
                      className="flex p-2 shadow rounded-[10px]"
                      onClick={() => {
                        setCatalogFloorIsOpen(false);
                        setCatalogBrandIsOpen(true);
                        setRochaForteSetIsOpen(false);
                      }}
                    >
                      <FaLongArrowAltLeft size={25} />
                      Voltar
                    </button>
                    <h1 className="font-bold">Rocha Forte</h1>
                  </div>

                  <div className="overflow-auto">
                    <div className="h-[250px] w-full ">
                      <div className="flex items-center">
                        <h6>Cerâmicas</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "rochaForte" &&
                            floor.type === "Cerâmica" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                      <div className="flex items-center">
                        <h6>Revestimentos</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "rochaForte" &&
                            floor.type === "Revestimento" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {pamesaSetIsOpen && (
                <div>
                  <div className="flex items-center justify-between">
                    <button
                      className="flex p-2 shadow rounded-[10px]"
                      onClick={() => {
                        setCatalogFloorIsOpen(false);
                        setCatalogBrandIsOpen(true);
                        setPamesaSetIsOpen(false);
                      }}
                    >
                      <FaLongArrowAltLeft size={25} />
                      Voltar
                    </button>
                    <h1 className="font-bold">Pamesa</h1>
                  </div>

                  <div className="overflow-auto">
                    <div className="h-[250px] w-full ">
                      <div className="flex items-center">
                        <h6>Cerâmicas</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "pamesa" && floor.type === "Cerâmica" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                      <div className="flex items-center">
                        <h6>Revestimentos</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "stela" &&
                            floor.type === "Revestimento" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {elizabethSetIsOpen && (
                <div>
                  <div className="flex items-center justify-between">
                    <button
                      className="flex p-2 shadow rounded-[10px]"
                      onClick={() => {
                        setCatalogFloorIsOpen(false);
                        setCatalogBrandIsOpen(true);
                        setElizabethSetIsOpen(false);
                      }}
                    >
                      <FaLongArrowAltLeft size={25} />
                      Voltar
                    </button>
                    <h1 className="font-bold">Elizabeth</h1>
                  </div>

                  <div className="overflow-auto">
                    <div className="h-[250px] w-full ">
                      <div className="flex items-center">
                        <h6>Cerâmicas</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "elizabeth" && floor.type === "Cerâmica" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                      <div className="flex items-center">
                        <h6>Revestimentos</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "elizabeth" &&
                            floor.type === "Revestimento" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                        </div>
                        <div className="flex items-center">
                        <h6>Porcelanato</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "elizabeth" &&
                            floor.type === "Porcelanato" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {arielleSetIsOpen && (
                <div>
                  <div className="flex items-center justify-between">
                    <button
                      className="flex p-2 shadow rounded-[10px]"
                      onClick={() => {
                        setCatalogFloorIsOpen(false);
                        setCatalogBrandIsOpen(true);
                        setArielleSetIsOpen(false);
                      }}
                    >
                      <FaLongArrowAltLeft size={25} />
                      Voltar
                    </button>
                    <h1 className="font-bold">Arielle</h1>
                  </div>

                  <div className="overflow-auto">
                    <div className="h-[250px] w-full ">
                      <div className="flex items-center">
                        <h6>Cerâmicas</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "arielle" && floor.type === "Cerâmica" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                      <div className="flex items-center">
                        <h6>Revestimentos</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "arielle" &&
                            floor.type === "Revestimento" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                        </div>
                        <div className="flex items-center">
                        <h6>Porcelanato</h6>
                        <div className="w-full h-[2px] bg-black"></div>
                      </div>
                      <div className="flex flex-wrap justify-center gap-3 py-3">
                        {floors.map(
                          (floor) =>
                            floor.brand === "arielle" &&
                            floor.type === "Porcelanato" && (
                              <button
                                key={floor.reference}
                                onClick={() => {
                                  if(changeHall) setStoneReferenceHall(floor.img);
                                  if(changeFloor) setStoneReferenceFloor(floor.img);
                                }}
                              >
                                <Floors
                                  stoneImage={floor.img}
                                  stoneName={floor.reference}
                                  stoneSize={floor.size}
                                  key={floor.reference}
                                />
                              </button>
                            )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </main>
          )}
        </div>
      )}

      {!catalogIsOpen && (
        <button
          id="catalogMinimizer"
          onClick={() => {
            setcatalogIsOpen(true);
          }}
          className="bg-white shadow p-5 rounded-full absolute top-14 right-11 
          flex flex-col gap-2 hover:rotate-180 duration-300 z-50"
        >
          <div className="w-8 h-1 bg-black rounded-full"></div>
          <div className="w-8 h-1 bg-black rounded-full"></div>
          <div className="w-8 h-1 bg-black rounded-full"></div>
        </button>
      )}
      <div className=" h-[100vh] flex justify-center items-center max-w-[1400px]">
        <KitchenImage
          ReferenceFloor={stoneReferenceFloor}
          ReferenceHall={stoneReferenceHall}
          key='asrfe'
        />
      </div>
    </section>
  );
}
