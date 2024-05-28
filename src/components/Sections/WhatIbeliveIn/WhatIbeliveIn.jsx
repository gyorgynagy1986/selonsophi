import React from "react";
import Style from "./WhatIbeliveIn.module.css";
import Image from "next/image";
import Photo from "../../../../public/assets/sections/belive.png";

import { Cardo } from "next/font/google";

const cardo = Cardo({ subsets: ["latin"], weight: ["400"] });

const WhatIbeliveIn = () => {
  return (
    <div className={Style.container}>
      <h2 className={`${cardo.className} ${Style.h2}`}>Amiben hiszek</h2>
      <div className={Style.flex_container}></div>
      <div className={Style.flex_container}>
        <Image src={Photo} alt="hello" />
      </div>
      <div className={Style.flex_container}>
        <div className={Style.textContainer}>
          <div>
            <h2>Mindörökké tanuló és csak ezután oktató.</h2>
            <p>
              Hiszek a jóságban, az őszinte segítség nyújtásban és abban, hogy
              az általam már bejárt úton megtapasztaltak és az eddig elvégzett
              és folyamatban lévő tanulmányaim jó alapot képzenek ahhoz, hogy
              tanítsak és támogassak - mindezt abban a tudatban, hogy életem
              végéig tanuló is maradok. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIbeliveIn;
