import { useState, useEffect } from "react";

type ScreenType = "mobile" | "tablet" | "desktop";

const getScreenType = (width: number): ScreenType => {
  if (width < 768) {
    return "mobile";
  } else if (width >= 768 && width <= 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};

const useScreenType = (): ScreenType => {
  const [screenType, setScreenType] = useState<ScreenType>(
    getScreenType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenType(getScreenType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenType;
};

export default useScreenType;
