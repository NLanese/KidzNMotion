
// React
import React, { ReactNode } from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, tokenState, clientListState, colorState, fontState, sizeState, videoDataState, avatarState, meetingState, assignState, firstOpen, subscriptionState, errorDataState} from "../../../Recoil/atoms";


// Define the types for the props
interface GradientProps {
  threeColors?: boolean; // Determines if three colors should be used
  colorOne: string; // First gradient color (required)
  colorTwo: string; // Second gradient color (required)
  colorThree?: string; // Optional third gradient color
  style?: StyleProp<ViewStyle>; // Optional container style
  hollow?: boolean; // Determines if the gradient should have a hollow effect
  hollowColor?: string; // Color for hollow effect
  hollowBorderSize?: "small" | "medium" | "large" | "xLarge"; // Size of hollow border
  hollowStyles?: StyleProp<ViewStyle>; // Additional styles for hollow effect
  children?: ReactNode; // Child components
}

const Gradient: React.FC<GradientProps> = ({
  threeColors = false,
  colorOne,
  colorTwo,
  colorThree,
  style = {
    padding: 2,
    height: "auto",
    width: "auto",
  },
  hollow = false,
  hollowColor,
  hollowBorderSize = "medium",
  hollowStyles,
  children,
}) => {
  // Null value guards
  if (!colorOne || !colorTwo) {
    throw new Error(
      "Error: <Gradient> Components need to have color values for both colorOne and colorTwo props!"
    );
  }

  if (hollow) {
    if (
      !["small", "medium", "large", "xLarge"].includes(hollowBorderSize)
    ) {
      throw new Error(
        "Error: <Gradient> Components, when hollow is true, need to have a hollowBorderSize of either 'small', 'medium', 'large', or 'xLarge'. No value defaults to 'medium'"
      );
    }
    if (!hollowColor) {
      throw new Error(
        "Error: <Gradient> Components, when hollow is true, need to have a color value in string format for the hollowColor prop"
      );
    }
  }

  // Colors array
  let colorsArray = [colorOne, colorTwo];
  if (threeColors && colorThree) {
    colorsArray = [...colorsArray, colorThree];
  }

  // Ratio values for styling
  const ratios = {
    small: 0.96,
    medium: 0.91,
    large: 0.9,
    xLarge: 0.75,
  };

  const ratio = ratios[hollowBorderSize];

  // Convert StyleProp to plain object
  const resolvedStyle = StyleSheet.flatten(style);


  // Hollow styles
  let hollowStyle: ViewStyle = {
    ...resolvedStyle,
  };

  if (hollow) {
    hollowStyle = {
      ...resolvedStyle,
      backgroundColor: hollowColor,
      height: (style as ViewStyle).height
        ? (style as ViewStyle).height as number * ratio
        : "auto",
      width: (style as ViewStyle).width
        ? (style as ViewStyle).width as number * ratio
        : "auto",
    };

    if (hollowStyles) {
      hollowStyle = {
        ...hollowStyle,
        ...(hollowStyles as ViewStyle),
      };
    }

    style = {
      ...style,
      justifyContent: "center",
      alignItems: "center",
    };
  }

  return (
    <View>
      <LinearGradient colors={colorsArray} style={style}>
        <View style={hollowStyle}>{children}</View>
      </LinearGradient>
    </View>
  );
};

export default Gradient;
