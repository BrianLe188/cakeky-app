import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons";

export type IconLib = "FontAwesome" | "Entypo" | "Ionicons";

export type TFontAwesome = keyof typeof FontAwesome.glyphMap;

export type TEntypo = keyof typeof Entypo.glyphMap;

export type TIonicons = keyof typeof Ionicons.glyphMap;

export type IconName = TFontAwesome | TEntypo | TIonicons;
