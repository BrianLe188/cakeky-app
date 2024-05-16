import { Entypo, FontAwesome, Ionicons } from '@expo/vector-icons';
import type { IconLib, IconName, TFontAwesome, TEntypo, TIonicons } from './types';
import { OpaqueColorValue } from 'react-native';

interface IIconProps {
  lib: IconLib;
  name: IconName;
  size: number;
  color: string | OpaqueColorValue;
}

export default function Icon({ lib = 'FontAwesome', ...props }: IIconProps) {
  switch (lib) {
    case 'FontAwesome':
      return <FontAwesome {...props} name={props.name as TFontAwesome} />;
    case 'Entypo':
      return <Entypo {...props} name={props.name as TEntypo} />;
    case 'Ionicons':
      return <Ionicons {...props} name={props.name as TIonicons} />;
  }
}
