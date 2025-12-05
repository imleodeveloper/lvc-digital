"use client";

import { ImageOff, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  fullCase: {
    title: string;
    content: string;
  };
}

export function ProjectsSection() {
  const [selectedCase, setSelectedCase] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop || !sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects: Project[] = [
    {
      id: "marques",
      title: "Como a Marques Construtora aumentou em 127% o faturamento",
      description:
        "Sobre a Marques Construtora: A Marques Construtora atua há mais de 20 anos no mercado imobiliário com a finalidade de superar as expectativas.",
      image: "/projects/marques.jpg",
      stats: [
        { label: "Aumento no Faturamento", value: "127%" },
        { label: "Mais Leads Qualificados", value: "300%" },
        { label: "Taxa de Conversão", value: "85%" },
      ],
      fullCase: {
        title: "Marques Construtora - Case Completo",
        content: "Conteúdo completo do case da Marques Construtora...",
      },
    },
    {
      id: "isenti",
      title: "Case Isenti: Gestão de tráfego orgânico mensal de R$ 1 milhão",
      description:
        "Quais foram os problemas enfrentados pela Isenti antes da nossa consultoria? Como conseguimos otimizar os resultados? Veja como foi o processo.",
      image: "/projects/isenti.jpg",
      stats: [
        { label: "Tráfego Mensal", value: "R$ 1M" },
        { label: "Crescimento Orgânico", value: "500%" },
        { label: "ROI Positivo", value: "92%" },
      ],
      fullCase: {
        title: "Isenti - Case Completo",
        content: "Conteúdo completo do case Isenti...",
      },
    },
    {
      id: "icto",
      title: "Tráfego orgânico mensal ICTO disparou + 5.1 milhões de acessos",
      description:
        "De 7900 acessos mensais para análises mensais para 5.1 milhões de acessos mensais em 12 meses. Fomos procurados para criar um...",
      image: "/projects/icto.jpg",
      stats: [
        { label: "Acessos Mensais", value: "5.1M" },
        { label: "Crescimento", value: "646%" },
        { label: "Meses de Trabalho", value: "12" },
      ],
      fullCase: {
        title: "ICTO - Case Completo",
        content: "Conteúdo completo do case ICTO...",
      },
    },
  ];

  return (
    <>
      <div
        ref={sectionRef}
        className="w-full min-h-screen relative bg-black overflow-hidden"
      >
        {/* Background squares texture */}
        <div className="absolute inset-0 w-full h-full opacity-50">
          <Image src="/bg-squares.png" alt="" fill className="object-cover" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 lg:px-20 py-24 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-white text-5xl lg:text-6xl font-extrabold mb-4">
              Cases de Sucesso
            </h2>
            <p className="text-white/70 text-xl lg:text-2xl">
              Conheça alguns dos resultados que alcançamos para nossos clientes
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-black/90 border border-white/10 rounded-lg overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] bg-gray-800 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <ImageOff className="w-16 h-16 text-white/30" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-white text-xl font-bold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="text-center p-3 bg-white/5 rounded-lg border border-white/10"
                        >
                          <div className="text-main-orange text-2xl font-bold mb-1">
                            {stat.value}
                          </div>
                          <div className="text-white/70 text-xs">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => setSelectedCase(project)}
                      className="w-full py-3 px-6 bg-orange-reflex text-white font-bold rounded-lg hover:brightness-110 transition-all duration-300"
                      style={{
                        animation: "orangeReflex 5s ease-in-out infinite",
                      }}
                    >
                      Ver Case Completo
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Modal */}
      {selectedCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop com blur */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-lg"
            onClick={() => setSelectedCase(null)}
          />

          {/* Modal Content */}
          <div className="relative w-[90vw] h-[90vh] bg-black border border-white/20 rounded-lg overflow-hidden flex flex-col shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-8">
              <h2 className="text-white text-4xl font-bold mb-6">
                {selectedCase.fullCase.title}
              </h2>
              <div className="text-white/70 text-lg leading-relaxed">
                {selectedCase.fullCase.content}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: var(--main-orange);
        }
        .projects-swiper .swiper-pagination-bullet {
          background: var(--main-orange);
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: var(--main-orange);
        }
      `}</style>
    </>
  );
}
