"use client";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

gsap.registerPlugin(ScrollTrigger);

export function ClientsSection() {
  const swiperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop || !swiperRef.current) return;

    const slides = swiperRef.current.querySelectorAll(".swiper-slide");

    slides.forEach((slide, index) => {
      gsap.fromTo(
        slide,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: slide,
            start: "top 90%",
            scrub: true,
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
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
      nome: "Fernanda Cutolo",
      img: "/clientes/Fernanda-Cutolo.png",
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
      nome: "Mario Xuxa",
      img: "/clientes/Mario-xuxa.png",
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
    <div className="w-full relative flex flex-col justify-center items-center gap-4 bg-orange-overlay py-24 px-4 lg:px-0">
      <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent to-[40%]"></div>
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
      <div ref={swiperRef}>
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={{
            enabled: true,
            momentum: false, // impede que ele trave ao final do swipe
          }}
          autoplay={{
            delay: 800, // sem delay entre slides
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000} // controla a velocidade da rolagem contínua
          className="w-full cursor-pointer"
        >
          {clients.map((client) => {
            return (
              <SwiperSlide
                key={client.img}
                className="!w-56 !h-56 !flex !flex-col !justify-center !items-center"
              >
                <div className="w-full h-[90%] flex justify-center items-center relative">
                  {client.img ? (
                    <>
                      <Image
                        src={client.img}
                        alt={client.nome}
                        fill
                        className="object-contain"
                      />
                      {client.nome !== "VierCa Tech" && (
                        <span className="mt-36 text-black text-lg font-semibold">
                          {client.nome}
                        </span>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-[90%] flex justify-center items-center bg-black rounded-full border border-orange-600">
                      <ImageOff className="w-12 h-12 text-white" />{" "}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
