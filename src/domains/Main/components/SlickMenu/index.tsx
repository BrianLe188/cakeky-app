import { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ISlickMenuProps extends PropsWithChildren {
  title: string;
  subTitle?: string;
  onSubPress?: () => void;
}

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  subTitle: {
    fontSize: 15,
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
  children: {
    marginTop: 10,
  },
});

export default function SlickMenu({ title, subTitle, onSubPress, children }: ISlickMenuProps) {
  return (
    <View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && (
          <Text style={styles.subTitle} onPress={onSubPress}>
            {subTitle}
          </Text>
        )}
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
}
