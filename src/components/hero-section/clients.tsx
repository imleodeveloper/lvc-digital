"use client";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

export function ClientsSection() {
  const clients = [
    {
      nome: "ALLI Contabilidade",
      img: "/clientes/Alli.png",
    },
    {
      nome: "AM Outlet",
      img: "/clientes/AM-outlet.png",
    },
    {
      nome: "Brunno Tassitani",
      img: "/clientes/Brunno-tassitani.png",
    },
    {
      nome: "Doctor Burguer",
      img: "/clientes/Doctor.png",
    },
    {
      nome: "Gustavo Motta",
      img: "/clientes/Gustavo-motta.png",
    },
    {
      nome: "Gustavo Teixeira",
      img: "/clientes/Gustavo-teixeira.png",
    },
    {
      nome: "JC Munhoz",
      img: "/clientes/Jc-munhoz.png",
    },
    {
      nome: "Lavie",
      img: "/clientes/Lavie.png",
    },
    {
      nome: "Madame Brasil",
      img: "/clientes/Madame-brasil.png",
    },
    {
      nome: "Max Bell",
      img: "/clientes/Max-bell.png",
    },
    {
      nome: "Meca Importações",
      img: "/clientes/Meca.png",
    },
    {
      nome: "Odonto Para Você",
      img: "/clientes/Odonto-pra-voce.png",
    },
    {
      nome: "Saúde Bucal",
      img: "/clientes/Saude-bucal.png",
    },
    {
      nome: "SP Grifes",
      img: "/clientes/Sp-grifes.png",
    },
    {
      nome: "VierCa Tech",
      img: "/clientes/Vierca.png",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 bg-orange-overlay py-24 px-4 lg:px-0">
      <span className="text-center py-2 px-4 rounded-full bg-[#FAEBE1] border border-main-orange font-semibold text-sm text-orange-800">
        Aprovado por Diversas Empresas
      </span>
      <h2 className="text-white text-5xl font-extrabold mt-4 text-center">
        Clientes que <span className="text-orange-reflex">Confiam</span> no Meu
        Trabalho
      </h2>
      <p className="text-white/50 text-lg text-center">
        Mais de 50 projetos realizados com sucesso em diversos segmentos
      </p>
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        slidesPerView="auto"
        spaceBetween={0}
        autoplay={{
          delay: 800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        freeMode={true}
        className="w-full cursor-pointer transform hover:scale-110 transition-all duration-300"
      >
        {clients.map((client) => {
          return (
            <SwiperSlide key={client.img} className="!w-48 !h-48">
              <div className="w-full h-full flex justify-center items-center relative">
                {client.img ? (
                  <Image
                    src={client.img}
                    alt={client.nome}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center bg-black rounded-full border border-orange-600">
                    <ImageOff className="w-12 h-12 text-white" />{" "}
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
