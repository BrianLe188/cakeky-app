import { StyleProp, ViewStyle } from "react-native";

export type StyleGroup<T extends number | string | symbol> = {
  [key in T]: StyleProp<ViewStyle>;
};
