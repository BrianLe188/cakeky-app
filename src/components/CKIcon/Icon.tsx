import { Entypo, FontAwesome } from "@expo/vector-icons";
import type { IconLib, IconName } from "./types";
import { OpaqueColorValue } from "react-native";

interface IIconProps {
  lib: IconLib;
  name: IconName;
  size: number;
  color: string | OpaqueColorValue;
}

export default function Icon({ lib, ...props }: IIconProps) {
  switch (lib) {
    case "FontAwesome":
      return <FontAwesome {...props} />;
    case "Entypo":
      return <Entypo {...props} />;
  }
}
