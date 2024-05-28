"use client";
import React, { useState } from "react";
import Style from "./Reviews.module.css";
import { Cardo } from "next/font/google";
import useReviewAnimation from "./useReviewAnimation";
import Arrow from "./Arrow";
import Review from "./Review";
import {reviewData} from "@/data/content"
import {onClickHandlerNext, onClickHandlerPrev} from "./onclickHandeler"

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
