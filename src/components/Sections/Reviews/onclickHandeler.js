
import { reviewData } from "@/data/content"; // Adjust the path as necessary


export const onClickHandlerNext = ({ isAnimating, triggerScaleUp, triggerFadeIn, setReviewIndex }) => {
    if (isAnimating) return;
    triggerScaleUp("right");
    triggerFadeIn();
    setReviewIndex((prev) => (prev === reviewData.length - 1 ? 0 : prev + 1));
  };
  
  export const onClickHandlerPrev = ({ isAnimating, triggerScaleUp, triggerFadeIn, setReviewIndex }) => {
    if (isAnimating) return;
    triggerScaleUp("left");
    triggerFadeIn();
    setReviewIndex((prev) => (prev === 0 ? reviewData.length - 1 : prev - 1));
  };