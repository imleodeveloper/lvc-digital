"use client";

import {
  Smartphone,
  Globe,
  BarChart3,
  Code,
  Target,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string>("marketing");
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop || !imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        x: 300,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const services: Record<string, Service> = {
    criacao: {
      id: "criacao",
      title: "Criação de Sites e Marketing Digital",
      description:
        "Soluções completas em marketing digital para impulsionar seu negócio",
      features: [],
      icon: <Globe className="w-6 h-6" />,
    },
    marketing: {
      id: "marketing",
      title: "Marketing Digital",
      description:
        "Planejamento Estratégico Completo, Implementação 360 Station, Funil de Vendas, Geração de Leads, Mídia ADS, SEO, Gestão e Produção de Conteúdo - Redes Sociais e Blog, Automação e BI.",
      features: [
        "Google Ads",
        "Facebook Ads",
        "Instagram Marketing",
        "Email Marketing",
      ],
      icon: <Target className="w-6 h-6" />,
    },
    sites: {
      id: "sites",
      title: "Criação de Sites e Lojas",
      description:
        "Desenvolvimento de Sites Web ou Internet. Desenvolvemos Projetos Únicos para Gerar Mais Resultados e Conversões em Vendas.",
      features: [
        "Sites Responsivos",
        "E-commerce",
        "Landing Pages",
        "Otimização SEO",
      ],
      icon: <Globe className="w-6 h-6" />,
    },
    apps: {
      id: "apps",
      title: "Criação Apps Android e iOS",
      description:
        "Aplicativos - App para Startups, Empresas de Médio e Grande Porte. Planejamento Estrutural, Desenvolvimento por Etapas Suporte Técnico e Evolução da Ferramenta.",
      features: [
        "Apps Nativos",
        "Design UX/UI",
        "Integração API",
        "Publicação nas Stores",
      ],
      icon: <Smartphone className="w-6 h-6" />,
    },
    sistemas: {
      id: "sistemas",
      title: "Sistemas Web & Integrações de Softwares com Precisão",
      description:
        "Desenvolvimento de Projetos Sob Medida, Integrações entre Sistemas, Infraestrutura de Servidor e Suporte Especializado. Atendemos Médias e Grandes Empresas.",
      features: [
        "ERP Personalizado",
        "Integrações",
        "Cloud Computing",
        "Suporte 24/7",
      ],
      icon: <Code className="w-6 h-6" />,
    },
    transformacao: {
      id: "transformacao",
      title: "Transformação Digital - Consultoria ADS & SEO",
      description:
        "Acompanhe o processo de Transformação da sua Estrutura Comercial e de Marketing com Planejamento e Implementação para ganhos de Performance e Alcance de Metas.",
      features: [
        "Auditoria Digital",
        "Estratégia SEO",
        "Consultoria ADS",
        "Análise de Performance",
      ],
      icon: <TrendingUp className="w-6 h-6" />,
    },
    performance: {
      id: "performance",
      title: "MKT de Performance Anúncios ADS & SEO",
      description:
        "Análise Técnica de Tráfego BI, Campanhas, Analytics, Compra de Mídia, Visitas Orgânicas, Remarketing, Mídia Programática, Otimização, Criação e Gestão de Campanhas ADS, serviços de marketing na internet.",
      features: ["Tráfego Pago", "SEO Técnico", "Analytics", "Remarketing"],
      icon: <BarChart3 className="w-6 h-6" />,
    },
  };

  const serviceButtons = [
    {
      id: "marketing",
      label: "Marketing Digital",
      icon: <Target className="w-4 h-4" />,
    },
    { id: "criacao", label: "Criação", icon: <Globe className="w-4 h-4" /> },
    {
      id: "sites",
      label: "Sites e Lojas",
      icon: <Globe className="w-4 h-4" />,
    },
    { id: "apps", label: "Apps", icon: <Smartphone className="w-4 h-4" /> },
    { id: "sistemas", label: "Sistemas", icon: <Code className="w-4 h-4" /> },
    {
      id: "transformacao",
      label: "Transformação",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      id: "performance",
      label: "Performance",
      icon: <BarChart3 className="w-4 h-4" />,
    },
  ];

  const currentService = services[selectedService];

  return (
    <div className="w-full bg-black relative overflow-hidden">
      {/* Elementos decorativos com gradiente laranja e blur */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{
          background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
          backgroundSize: "300% 300%",
          animation: "orangeReflex 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{
          background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
          backgroundSize: "300% 300%",
          animation: "orangeReflex 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full blur-2xl opacity-10"
        style={{
          background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
          backgroundSize: "300% 300%",
          animation: "orangeReflex 5s ease-in-out infinite",
        }}
      />
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-20 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Lado Esquerdo - Conteúdo */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-white text-4xl lg:text-5xl font-extrabold mb-4">
                {currentService.title}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {currentService.description}
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-wrap gap-3">
              {currentService.features.map((feature, index) => (
                <div
                  key={index}
                  className="px-4 py-2 rounded-lg bg-blue-600/40 border border-white/20 text-white text-sm font-medium"
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* Botões de Seções */}
            <div className="flex flex-wrap gap-3">
              {serviceButtons.map((button) => (
                <button
                  key={button.id}
                  onClick={() => setSelectedService(button.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    selectedService === button.id
                      ? "bg-orange-reflex font-bold text-white cursor-pointer"
                      : "bg-white/5 border border-white/10 text-white/70 cursor-pointer hover:bg-white/10 hover:text-white"
                  }`}
                  style={
                    selectedService === button.id
                      ? {
                          animation: "orangeReflex 5s ease-in-out infinite",
                        }
                      : {}
                  }
                >
                  {button.icon}
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          {/* Lado Direito - Grid e Imagem */}
          <div className="relative">
            {/* Blur Background com Gradiente Laranja */}
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-30"
              style={{
                background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
                backgroundSize: "300% 300%",
                animation: "orangeReflex 5s ease-in-out infinite",
              }}
            />

            {/* Imagem Services */}
            <div
              ref={imageRef}
              className="relative w-full mb-4 rounded-lg overflow-hidden"
            >
              <Image
                src="/services.webp"
                alt="Serviços LVC Digital"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
