"use client";
import { ImageOff } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

gsap.registerPlugin(ScrollTrigger);

export function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop || !containerRef.current) return;

    const container = containerRef.current;
    const slides = container.querySelectorAll(".swiper-slide");

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
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
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
      <div ref={containerRef} className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop={true}
          slidesPerView="auto"
          spaceBetween={24}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1000}
          allowTouchMove={true}
          grabCursor={true}
          className="w-full cursor-pointer"
          breakpoints={{
            640: {
              spaceBetween: 32,
            },
            1024: {
              spaceBetween: 40,
            },
          }}
        >
          {clients.map((client, index) => {
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
