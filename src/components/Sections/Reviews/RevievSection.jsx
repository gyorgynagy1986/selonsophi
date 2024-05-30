"use client";
import React, { useState } from "react";
import Style from "./Reviews.module.css";
import { Cardo } from "next/font/google";
import useReviewAnimation from "./useReviewAnimation";
import Arrow from "./Arrow";
import Review from "./Review";
import {reviewData} from "@/data/content"
import {onClickHandlerNext, onClickHandlerPrev} from "./onclickHandeler"
import Image from "next/image";

import P1 from '../../../../public/assets/review/l.svg'
import P2 from '../../../../public/assets/review/r.svg'


const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] });

const Reviews = () => {
  const [reviewIndex, setReviewIndex] = useState(0);
  const { fadeIn, scaleUp, isAnimating, triggerFadeIn, triggerScaleUp } = useReviewAnimation();
 
  const handleNextClick = () => {
    onClickHandlerNext({
      isAnimating,
      triggerScaleUp,
      triggerFadeIn,
      setReviewIndex,
    });
  };

  const handlePrevClick = () => {
    onClickHandlerPrev({
      isAnimating,
      triggerScaleUp,
      triggerFadeIn,
      setReviewIndex,
    });
  };

  return (
    <section className={Style.section}>
      <Image className={Style.qu1} src={P1} />
      <Image className={Style.qu2}  src={P2} />
      <div className={Style.container}>
        <div className={Style.reviewContainer}>
          <Arrow direction="left" onClick={handlePrevClick} isAnimating={isAnimating} scaleUp={scaleUp.left} />
          <Review review={reviewData[reviewIndex]} fadeIn={fadeIn} cardo={cardo} />
          <Arrow direction="right" onClick={handleNextClick} isAnimating={isAnimating} scaleUp={scaleUp.right} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
