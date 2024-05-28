import React from "react";
import Image from "next/image";
import Style from "./Reviews.module.css";

const Arrow = ({ direction, onClick, isAnimating, scaleUp }) => {
    return (
      <div onClick={!isAnimating ? onClick : null} className={Style.arrowContainer}>
        <Image
          width={54}
          height={54}
          className={`${Style.arrow} ${scaleUp ? "scale-up" : ""}`}
          src={direction === "left" ? "/assets/review/left.svg" : "/assets/review/right.svg"}
          alt={`${direction} arrow`}
        />
      </div>
    );
  };

export default Arrow;