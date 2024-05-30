import React from "react";
import Style from "./Classes.module.css";
import Image from "next/image";
import { Cardo } from "next/font/google";

import ph1 from "../../../../public/assets/sections/Frame1.png";
import ph2 from "../../../../public/assets/sections/Frame2.png";
import ph3 from "../../../../public/assets/sections/Frame3.png";
import ph4 from "../../../../public/assets/sections/Frame4.png";
import ph5 from "../../../../public/assets/sections/Frame5.png";
import ph6 from "../../../../public/assets/sections/Frame6.png";

const cardo = Cardo({ subsets: ["latin"], weight: ["400"] });

const images = [
  { src: ph1, title: "Magán jógaórák", desc: "személyes / online" },
  { src: ph2, title: "Csoportos jógaórák", desc: "kürtevő füzlis féles betés" },
  { src: ph3, title: "Közösségi jógaórák", desc: "lorem ipsum dolor sit amet" },
  { src: ph4, title: "céges jógaórák", desc: "kürtevő füzlis féles betés" },
  { src: ph5, title: "Jógatáborok", desc: "lorem ipsum" },
  { src: ph6, title: "Yoga & Brunch", desc: "lorem ipsum" },
];

const Classes = () => {
  return (
    <div className={Style.container}>
      {images.map((image, index) => (
        <div key={index} className={Style.photoContainer}>
          <Image alt={image.title} src={image.src} />
          <div className={Style.textContainer}>
            <h2 className={cardo.className}>{image.title}</h2>
            <p>{image.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
