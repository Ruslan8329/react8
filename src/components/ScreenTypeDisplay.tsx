import React from "react";
import useScreenType from "../hooks/useScreenType";

const ScreenTypeDisplay: React.FC = () => {
  const screenType = useScreenType();

  return (
    <div>
      <h1>Current Screen Type: {screenType}</h1>
    </div>
  );
};

export default ScreenTypeDisplay;
