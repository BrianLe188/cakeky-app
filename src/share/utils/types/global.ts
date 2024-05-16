import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { StyleProp, ViewStyle } from "react-native";

export type StyleGroup<T extends number | string | symbol> = {
  [key in T]: StyleProp<ViewStyle>;
};

export interface IScreenProps {
  navigation: NavigationProp<ParamListBase>;
}
