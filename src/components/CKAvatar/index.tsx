import React from 'react';
import { TouchableOpacity, Image, StyleSheet, TouchableOpacityProps, StyleProp, ViewStyle } from 'react-native';

type CKAvatarSize = 'sm' | 'md' | 'lg';
interface ICKAvatarProps extends TouchableOpacityProps {
  uri?: string;
  size?: CKAvatarSize;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  small: {
    width: 40,
    height: 40,
  },
  medium: {
    width: 60,
    height: 60,
  },
  large: {
    width: 80,
    height: 80,
  }
});

const avatarStyle: { [key in CKAvatarSize]: StyleProp<ViewStyle> } = {
  sm: styles.small,
  md: styles.medium,
  lg: styles.large,
};

export default function CKAvatar({ uri, size = 'sm', onPress, style, ...props }: ICKAvatarProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, avatarStyle[size]]} {...props}>
      <Image source={{ uri }} style={styles.avatar} />
    </TouchableOpacity>
  );
}
