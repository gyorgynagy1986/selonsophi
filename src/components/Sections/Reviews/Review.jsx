import React from "react";
import Image from "next/image";
import Style from "./Reviews.module.css";

const Review = ({ review, fadeIn, cardo }) => {
  return (
    <div className={`${Style.textContainer} ${fadeIn ? "slide-in-elliptic-top-fwd" : ""}`}>
      <div>
        <Image className={Style.reviewPhoto} width={200} height={200} src={review.src} alt="Review Photo" />
      </div>
      <p className={`${cardo.className} ${Style.title}`}>{review.name}</p>
      <p>{review.text}</p>
    </div>
  );
};

export default Review;
