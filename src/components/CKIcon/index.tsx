import CKButton from "@components/CKButton";
import type { IconLib, IconName } from "./types";
import Icon from "./Icon";
import {
  OpaqueColorValue,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

interface ICKIconProps extends TouchableOpacityProps {
  name: IconName;
  size?: number;
  lib?: IconLib;
  color?: string | OpaqueColorValue;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 2,
    paddingVertical: 1,
    height: "auto",
    backgroundColor: "transparent",
  },
});

export default function CKIcon({
  name,
  size = 24,
  lib = "FontAwesome",
  color = "black",
  style,
  onPress,
}: ICKIconProps) {
  return (
    <CKButton
      icon={<Icon lib={lib} size={size} name={name} color={color} />}
      onPress={() => onPress && onPress()}
      style={[styles.button, style]}
    />
  );
}
