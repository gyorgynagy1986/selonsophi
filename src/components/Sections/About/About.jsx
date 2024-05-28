import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import { about } from "@/data/alt";
import Photo from "../../../../public/assets/sections/about.png";
import Photo2 from "../../../../public/assets/sections/about2.png";

import { Cardo } from "next/font/google";

const cardo = Cardo({ subsets: ["latin"], weight: ["400"] });

const About = () => {
  return (
    <div className={Style.container}>
      <div className={Style.textContainer}>
        <div className={Style.textContainerLayer}></div>
        <div className={Style.absoluteText}>
          <p className={cardo.className}>Üdvözöllek</p>
        </div>
        <h2 className={cardo.className}>Zsófi vagyok.</h2>
        <div className={Style.pContainer}>
          <p>
            Hatha, Kismama, Flow, Női  jóga és Mobility oktatóként segítem és
            kísérem a tanítványaim, gyakorlóim útját.
          </p>
          <p>
            Te pedig, legyél bár a jógával még épp csak ismerkedő, lelkes kezdő,
            vagy rendszeresen gyakorló, haladó jógázó, biztosan tudom, hogy mind
            a csoportos mind a magán jóga óráimon megtalálod a fejlődés
            lehetőségét.
          </p>
        </div>
      </div>
      <div className={Style.container1}>
        <Image className={Style.image} src={Photo} alt={about.name} />
      </div>
      <div className={Style.container2}>
        <Image className={Style.image2} src={Photo2} alt={about.name} />
      </div>
    </div>
  );
};

export default About;
