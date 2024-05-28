import React from "react";
import Style from "./Help.module.css";
import Image from "next/image";
import { help } from "@/data/alt";
import Photo from "../../../../public/assets/sections/help.png";

import { Cardo } from "next/font/google";

const cardo = Cardo({ subsets: ["latin"], weight: ["400"] });

const Help = () => {
  return (
    <section className={Style.section}>
      <div className={Style.container}>
        <Image alt={help} src={Photo} />
        <div className={Style.textContainer}>
          <h2 className={cardo.className}>Amiben segíteni tudlak</h2>
          <div>
            <p className={Style.titleText}>
              Hatha, Kismama, Flow, Női  jóga és Mobility oktatóként segítem és
              kísérem a tanítványaim, gyakorlóim útját.
            </p>
            <p className={Style.longText}>
              Te pedig, legyél bár a jógával még épp csak ismerkedő, lelkes
              kezdő, vagy rendszeresen gyakorló, haladó jógázó, biztosan tudom,
              hogy mind a csoportos mind a magán jóga óráimon megtalálod a
              fejlődés lehetőségét.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
