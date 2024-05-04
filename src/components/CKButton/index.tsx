import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  StyleProp,
  ViewStyle,
} from "react-native";

type CKButtonIconPosition = "left" | "right";
type CKButtonVariant = "main" | "success" | "danger" | "info" | "warn";

interface ICKButtonProps extends TouchableOpacityProps {
  title?: string;
  icon?: React.ReactNode;
  iconPosition?: CKButtonIconPosition;
  variant?: CKButtonVariant;
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FD76A7",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 10,
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  mainButton: {
    backgroundColor: "#FD76A7",
  },
  successButton: {
    backgroundColor: "green",
  },
  dangerButton: {
    backgroundColor: "red",
  },
  infoButton: {
    backgroundColor: "blue",
  },
  warnButton: {
    backgroundColor: "yellow",
  },
});

const buttonVariantStyles: { [key in CKButtonVariant]: StyleProp<ViewStyle> } =
  {
    main: styles.mainButton,
    success: styles.successButton,
    danger: styles.dangerButton,
    info: styles.infoButton,
    warn: styles.warnButton,
  };

export default function CKButton({
  title,
  icon,
  iconPosition = "right",
  variant = "main",
  onPress,
  style,
  ...props
}: ICKButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, buttonVariantStyles[variant]]}
      onPress={onPress}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {title && <Text style={styles.buttonTitle}>{title}</Text>}
      {icon && iconPosition === "right" && icon}
    </TouchableOpacity>
  );
}
