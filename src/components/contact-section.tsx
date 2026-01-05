"use client";

import { Mail, MessageCircle, Calendar, Handshake } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".action-card");

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: 300,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full bg-black relative overflow-hidden">
      {/* Elementos decorativos laranjas com blur */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 z-10"
        style={{
          background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
          backgroundSize: "300% 300%",
          animation: "orangeReflex 5s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-10 z-10"
        style={{
          background: `linear-gradient(120deg, var(--main-orange), var(--sub-orange), #ff0000, var(--sub-orange), var(--main-orange))`,
          backgroundSize: "300% 300%",
          animation: "orangeReflex 5s ease-in-out infinite",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 lg:px-20 py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Lado Esquerdo - Informações */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-white text-4xl lg:text-5xl font-extrabold mb-4">
                Vamos Trabalhar Juntos?
              </h2>
              <p className="text-white/70 text-lg lg:text-xl mb-6">
                Pronto para levar seu negócio ao próximo nível? Entre em contato
                e vamos conversar sobre suas necessidades.
              </p>
              <a
                href="https://wa.link/w9o256"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-orange-reflex text-white font-bold rounded-lg hover:brightness-110 transition-all duration-300"
                style={{
                  animation: "orangeReflex 5s ease-in-out infinite",
                }}
              >
                Entre em Contato
              </a>
            </div>

            <div>
              <p className="text-white/70 text-base mb-8">
                Estou sempre disponível para discutir novos projetos e
                oportunidades de parceria. Vamos conversar sobre como posso
                ajudar seu negócio a crescer no digital.
              </p>

              {/* Informações de Contato */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-main-orange" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">Email</p>
                    <a
                      href="mailto:lucasempresalvc@gmail.com"
                      className="text-white hover:text-main-orange transition-colors"
                    >
                      lucasempresalvc@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-main-orange" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">WhatsApp</p>
                    <a
                      href="https://wa.link/w9o256"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-main-orange transition-colors"
                    >
                      (11) 96340-4230
                    </a>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-main-orange/20 border border-main-orange/30">
                <div className="w-2 h-2 rounded-full bg-main-orange animate-pulse" />
                <span className="text-white text-sm font-medium">
                  Disponível para novos projetos
                </span>
              </div>
            </div>
          </div>

          {/* Lado Direito - Cards de Ação */}
          <div ref={cardsRef} className="flex flex-col gap-6">
            {/* Card Consultoria Gratuita */}
            <div className="action-card bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-main-orange/20 border border-main-orange/30 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-main-orange" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Consultoria Gratuita
                  </h3>
                  <p className="text-white/70 text-sm">
                    Agende uma conversa de 30 minutos para discutirmos suas
                    necessidades e objetivos
                  </p>
                </div>
              </div>
              <a
                href="https://wa.link/w9o256"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-orange-reflex text-white font-bold rounded-lg hover:brightness-110 transition-all duration-300 inline-block text-center"
                style={{
                  animation: "orangeReflex 5s ease-in-out infinite",
                }}
              >
                Agendar Consultoria
              </a>
            </div>

            {/* Card Fechar Parceria */}
            <div className="action-card bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-main-orange/20 border border-main-orange/30 flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-main-orange" />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Fechar Parceria
                  </h3>
                  <p className="text-white/70 text-sm">
                    Receba uma proposta detalhada e personalizada para seu
                    projeto específico
                  </p>
                </div>
              </div>
              <a
                href="https://wa.link/w9o256"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 bg-orange-reflex text-white font-bold rounded-lg hover:brightness-110 transition-all duration-300 inline-block text-center"
                style={{
                  animation: "orangeReflex 5s ease-in-out infinite",
                }}
              >
                Solicitar Proposta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
