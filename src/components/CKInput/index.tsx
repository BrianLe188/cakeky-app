import { COLORS } from "@utils/constants/global";
import { StyleGroup } from "@utils/types/global";
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type CKInputSize = "sm" | "md" | "lg";
type CKInputVariant = "underline" | "outlined" | "nude";
type CKInputStatus = "success" | "error" | "none";

interface ICKInputProps extends TextInputProps {
  variant?: CKInputVariant;
  size?: CKInputSize;
  label?: string;
  status?: CKInputStatus;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    borderWidth: 1,
    width: "100%",
    paddingVertical: 9,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  small: {
    height: 40,
  },
  medium: {
    height: 50,
  },
  large: {
    height: 60,
  },
  underline: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  outlined: {
    borderWidth: 1,
  },
  nude: {
    borderWidth: 0,
  },
  success: {
    borderColor: COLORS.success,
    color: COLORS.success,
  },
  error: {
    borderColor: COLORS.danger,
    color: COLORS.danger,
  },
});

const inputSizeStyles: StyleGroup<CKInputSize> = {
  sm: styles.small,
  md: styles.medium,
  lg: styles.large,
};

const inputVariantStyles: StyleGroup<CKInputVariant> = {
  underline: styles.underline,
  outlined: styles.outlined,
  nude: styles.nude,
};

const inputStatusStyles: StyleGroup<CKInputStatus> = {
  success: styles.success,
  error: styles.error,
  none: null,
};

export default function CKInput({
  variant = "outlined",
  size = "md",
  label,
  status = "none",
  style,
  ...props
}: ICKInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          inputSizeStyles[size],
          inputVariantStyles[variant],
          inputStatusStyles[status],
          style,
        ]}
        {...props}
      />
    </View>
  );
}
