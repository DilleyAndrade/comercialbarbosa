import Frames from "@/components/Frames";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-screen flex-col items-center justify-between bg-white">
      <header className="flex flex-col items-center pt-3">
        <figure>
          <Image
            src="/logo.png"
            height={152}
            width={300}
            alt="Logo Varejão dos pisos"
          />
        </figure>
        <h1 className="font-bold">Simule seu ambiente</h1>
        <h2 className="font-regular">Escolha um dos ambientes abaixo.</h2>
      </header>

      <main>
        <section className="flex items-center gap-2">
          <a href="/cozinha" rel="noopener noreferrer">
            <Frames
              key="frame1"
              frameImage="/kitchenSmall.jpg"
              frameName="Cozinha"
            />
          </a>

          <a href="/sala" rel="noopener noreferrer">
            <Frames 
              key="frame2" 
              frameImage="/roomSmall.jpg" 
              frameName="Sala"
            />
          </a>

          <a href="/quarto" rel="noopener noreferrer">
            <Frames
              key="frame3"
              frameImage="/bedRoomSmall.jpg"
              frameName="Quarto"
            />
          </a>

          <a href="/banheiro" rel="noopener noreferrer">
            <Frames
              key="frame4"
              frameImage="/toiletSmall.jpg"
              frameName="Banheiro"
            />
          </a>
        </section>
      </main>

      <footer>
        <div className="bg-primaryColor w-screen py-3 text-center font-bold text-white">
          <h6>
            Varejão dos Pisos - Av. Dr. Belmino Correia, 1378 Bairro Novo do
            Carmelo, Camaragibe -PE
          </h6>
        </div>
        <div className="bg-secondaryColor w-screen py-3 text-center font-bold text-white">
          <h6>&copy; Varejão dos pisos - Todos os direitos reservados</h6>
        </div>
      </footer>
    </div>
  );
}
