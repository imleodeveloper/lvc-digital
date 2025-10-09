"use client";
import {
  Cog,
  Handshake,
  Headset,
  Info,
  Menu,
  PanelLeft,
  UserRound,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function HeaderMain() {
  const [menu, setMenu] = useState<boolean>(false);
  const [animateMenu, setAnimateMenu] = useState<boolean>(false);

  const handleClickButtonMenu = () => {
    setAnimateMenu(true);
    setTimeout(() => setAnimateMenu(false), 5000);
  };

  const menuItems = [
    {
      name: "Sobre",
      path: "/#sobre",
      icon: (
        <Info className="text-white w-5 h-5 group-hover:text-main-orange" />
      ), // Ícone representativo
    },
    {
      name: "Serviços",
      path: "/#servicos",
      icon: <Cog className="text-white w-5 h-5 group-hover:text-main-orange" />, // Ícone representativo
    },
    {
      name: "Clientes",
      path: "/#clientes",
      icon: (
        <UsersRound className="text-white w-5 h-5 group-hover:text-main-orange" />
      ), // Ícone representativo
    },
    {
      name: "Contato",
      path: "/#contato",
      icon: (
        <Headset className="text-white w-5 h-5 group-hover:text-main-orange" />
      ), // Ícone representativo
    },
  ];

  return (
    <>
      <div className="w-full bg-black flex justify-between items-center container px-12 py-4">
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
              Phoenix Digital
            </span>
            <span className="text-gray-400 font-normal text-sm">
              Marketing & Design
            </span>
          </div>
        </div>
        <div className="justify-center items-center gap-4 hidden lg:flex">
          <ul className="flex justify-center items-center gap-8">
            {menuItems.map((item) => {
              return (
                <li
                  className={`
                group flex justify-center items-center gap-1 text-white hover:text-main-orange relative 
                after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[8px] after:h-[2px] after:bg-gradient-to-r 
                after:from-main-orange after:via-red-600 after:to-sub-orange hover:after:w-full after:transition-all after:duration-500
                `}
                  key={item.name}
                >
                  <Link
                    href={item.path}
                    className="flex justify-center items-center gap-1"
                  >
                    {item.icon} {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer flex justify-center items-center gap-1 rounded-sm px-4 py-2 bg-orange-reflex font-bold text-white transition-all duration-300 transform hover:brightness-[200%] hover:text-black hover:scale-105"
          >
            <Handshake className="w-5 h-5" />
            Fechar Parceria
          </a>
        </div>
        <div
          className="flex lg:hidden justify-center items-center cursor-pointer"
          onClick={() => {
            handleClickButtonMenu();
            setMenu(!menu);
          }}
        >
          <PanelLeft
            className={`w-6 h-6 text-white transform transition-transform duration-500${
              animateMenu ? "rotate-[180deg]" : "rotate-[0deg]"
            }`}
          />
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen justify-start items-start flex-col gap-12 bg-black z-30 transition-all duration-300 ${
          menu
            ? "max-w-72 pt-24 px-8"
            : "max-w-0 pt-0 px-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="w-18 h-18 relative flex justify-center items-center">
          <Image
            src="/LVC-Digital.webp"
            alt="Especialista em Marketing Digital - Experiência e Inovação no Marketing Digital"
            fill
          />
        </div>
        <ul className="w-full flex flex-col justify-start items-start gap-4 relative">
          {menuItems.map((item) => {
            return (
              <li
                className={`
                group flex cursor-pointer justify-center items-center gap-1 text-white hover:text-main-orange relative 
                after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[8px] after:h-[2px] after:bg-gradient-to-r 
                after:from-main-orange after:via-red-600 after:to-sub-orange hover:after:w-full after:transition-all after:duration-500
                `}
                key={item.name}
              >
                <Link
                  href={item.path}
                  className="flex justify-center items-center gap-1"
                >
                  {item.icon} {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
