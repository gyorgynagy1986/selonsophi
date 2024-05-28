import { useState, useEffect } from "react";

const useReviewAnimation = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [scaleUp, setScaleUp] = useState({ left: false, right: false });
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (fadeIn) {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setFadeIn(false);
        setIsAnimating(false);
      }, 700);
      return () => clearTimeout(timeout);
    }
  }, [fadeIn]);

  const triggerFadeIn = () => setFadeIn(true);

  const triggerScaleUp = (direction) => {
    setScaleUp((prevState) => ({ ...prevState, [direction]: true }));
    setTimeout(() => {
      setScaleUp((prevState) => ({ ...prevState, [direction]: false }));
    }, 300);
  };

  return { fadeIn, scaleUp, isAnimating, triggerFadeIn, triggerScaleUp };
};

export default useReviewAnimation;
