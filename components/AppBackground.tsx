import React, { ReactNode } from "react";
import Gradient from "./Display/Gradient";
import { useRecoilState } from "recoil";
import { colorState } from "@/Recoil/atoms";

interface AppBackgroundProps {
  children: ReactNode; // ReactNode allows any valid React child
}

const AppBackground: React.FC<AppBackgroundProps> = ({ children }) => {
  const [COLORS, setColors] = useRecoilState(colorState);

  return (
    <Gradient
      colorOne={COLORS.gradientColor1}
      colorTwo={COLORS.gradientColor2}
      style={{ height: '100%', width: '100%'}}
    >
      {children}
    </Gradient>
  );
};

export default AppBackground;
