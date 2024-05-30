import React from "react";
import Style from "./Hero.module.css";
import Image from "next/image";
import { hero } from "@/data/alt";
import Nav from "../Nav/Nav";

import { Cardo } from "next/font/google";
const cardo = Cardo({ subsets: ["latin"], weight: ["400"] });

import Heroimage from "../../../public/assets/hero/hero.png";

const Hero = () => {
  return (
    <section className={Style.container}>
      <Nav />
      <div className={Style.eh1Container}>
        <h1 className={Style.h1main}>GYERE</h1>
        <h1 className={`${cardo.className} ${Style.h1Italic}`}>jógázz velem</h1>
      </div>
      <p className={Style.p}>
        “A jóga gyakorlása által sikerült maradéktalanul megérkeznem a jelenbe.”
      </p>
      <Image priority className={Style.image} src={Heroimage} alt={hero.name} />
    </section>
  );
};

export default Hero;
