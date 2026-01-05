"use client";
import { Handshake } from "lucide-react";
import Image from "next/image";

export function HeaderMain() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full bg-black flex justify-between items-center px-12 py-4">
        <div className="flex justify-center items-center gap-4">
          <div className="w-18 h-18 relative flex justify-center items-center">
            <Image
              src="/LVC-Digital.webp"
              alt="Especialista em Marketing Digital - Experiência e Inovação no Marketing Digital"
              fill
            />
          </div>
          <div className="hidden lg:flex flex-col justify-center items-start gap-1">
            <span className="text-white font-extrabold text-2xl">
              LVC Digital
            </span>
            <span className="text-gray-400 font-normal text-sm">
              Marketing & Design
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://wa.me/5511963404230?text=Olá%20vim%20do%20site%20da%20LVC"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex justify-center items-center gap-1 rounded-sm px-4 py-2 bg-orange-reflex font-bold text-white transition-all duration-300 transform hover:brightness-[200%] hover:text-black hover:scale-105"
          >
            <Handshake className="w-5 h-5" />
            Fechar Parceria
          </a>
        </div>
      </div>
    </div>
  );
}
