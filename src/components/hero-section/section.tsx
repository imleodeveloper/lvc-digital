import { MoveRight, Play } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 items-start gap-8 container px-4 py-8 lg:px-20 lg:py-10 bg-orange-overlay relative">
      <div className="orange-ball animate-orange-float top-1/3 left-1/3"></div>
      <div className="w-full flex justify-start items-start flex-col gap-4">
        <span className="text-center py-2 px-4 rounded-full bg-[#FAEBE1] border border-main-orange font-semibold text-sm text-orange-800">
          Seja bem vindo a LVC Digital
        </span>
        <h1 className="text-white text-5xl lg:text-7xl font-extrabold">
          Somos uma agência de{" "}
          <span className="text-orange-reflex">Marketing Digital</span>
        </h1>
        <p className="text-lg text-white/50">
          Somos parceiros no <strong>crescimento da sua marca</strong>. Ajudamos
          você a alcançar novos resultados com{" "}
          <strong>estratégias de marketing</strong> Com design que transmite
          valor e campanhas de tráfego que realmente performam.
        </p>
        <p className="text-white">
          Analisamos sua empresa, identificamos pontos de melhoria e criamos
          caminhos para <strong>fortalecer seu branding</strong> e{" "}
          <strong>aumentar suas vendas</strong> com consistência.
        </p>
        <div className="flex justify-start items-start flex-col sm:flex-row gap-4 pb-6 border-b border-black/20 w-full">
          <a
            href="#"
            className="w-full sm:w-auto pl-4 pr-6 py-2 flex justify-center items-center gap-6 rounded-sm animate-pulse-orange bg-orange-reflex font-semibold hover:brightness-[200%] transition-all duration-300 group"
          >
            <span>Começar Agora</span>
            <MoveRight className="w-6 h-6 transform group-hover:translate-x-2 transition-all duration-300" />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto px-4 py-2 flex justify-center items-center border-2 border-gray-300 bg-transparent hover:bg-[#FAEBE1] hover:text-black gap-2 rounded-sm text-white font-semibold hover:brightness-[200%] transition-all duration-300 group"
          >
            <Play className="w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300" />
            <span>Ver Portfólio</span>
          </a>
        </div>
        <div className="grid grid-cols-3 justify-items-center sm:justify-items-start w-full">
          <div className="flex justify-start items-start gap-1 flex-col">
            <span className="text-orange-reflex text-4xl font-extrabold">
              7+
            </span>
            <span className="text-white/50 text-sm">Anos de Experiência</span>
          </div>
          <div className="flex justify-start items-start gap-1 flex-col">
            <span className="text-orange-reflex text-4xl font-extrabold">
              100+
            </span>
            <span className="text-white/50 text-sm">Projetos Entregues</span>
          </div>
          <div className="flex justify-start items-start gap-1 flex-col">
            <span className="text-orange-reflex text-4xl font-extrabold">
              50+
            </span>
            <span className="text-white/50 text-sm">Clientes Satisfeitos</span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start items-end flex-col relative">
        <div className="w-96 h-[40rem] relative animate-up-and-down fade-bottom">
          <Image
            src="/Lucas-Vieira-Carvalho.webp"
            alt="Lucas Vieira - LVC Digital - Marketing Digital & Design - Gestor de Tráfego"
            fill
            className="object-cover"
          />
        </div>
        <div className="animate-icon-move-1 w-24 h-24 absolute bottom-36 left-24 flex justify-center items-center bg-gray-200/10 backdrop-blur-md rounded-md border-4 border-gray-600/40">
          <Image src="/meta.webp" fill alt="Meta" className="object-contain" />
          <div className="absolute top-0 left-0 w-24 h-24 bg-orange-600 -z-[20] opacity-35 rounded-full blur-lg"></div>
        </div>
        <div className="animate-icon-move-2 w-24 h-24 absolute top-0 sm:top-24 left-36 sm:left-48 flex justify-center items-center bg-gray-200/10 backdrop-blur-md rounded-md border-4 border-gray-600/40">
          <Image
            src="/google-icon.webp"
            fill
            alt="Google Icon"
            className="object-contain"
          />
          <div className="absolute top-0 left-0 w-24 h-24 bg-orange-600 -z-[20] opacity-35 rounded-full blur-lg"></div>
        </div>
        <div className="animate-icon-move-3 w-24 h-24 absolute top-4 right-12 flex justify-center items-center bg-gray-200/10 backdrop-blur-md rounded-md border-4 border-gray-600/40">
          <Image
            src="/google-ads-icon.webp"
            fill
            alt="Google ADS Icon"
            className="object-contain"
          />
          <div className="absolute top-0 left-0 w-24 h-24 bg-orange-600 -z-[20] opacity-35 rounded-full blur-lg"></div>
        </div>
        <div className="animate-icon-move-4 w-24 h-24 absolute bottom-56 right-24 flex justify-center items-center bg-gray-200/10 backdrop-blur-md rounded-md border-4 border-gray-600/40">
          <Image
            src="/ps-icon.webp"
            fill
            alt="PhotoShop Icon"
            className="object-contain"
          />
          <div className="absolute top-0 left-0 w-24 h-24 bg-orange-600 -z-[20] opacity-35 rounded-full blur-lg"></div>
        </div>
      </div>
    </div>
  );
}
