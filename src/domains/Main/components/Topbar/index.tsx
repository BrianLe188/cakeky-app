import CKAvatar from '@share/components/CKAvatar';
import CKIcon from '@share/components/CKIcon';
import { COLORS } from '@share/utils/constants/global';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
});

export default function Topbar() {
  const onPress = () => {
    console.log('12123');
  };

  return (
    <View style={styles.container}>
      <CKIcon name="chevron-back" lib="Ionicons" onPress={() => onPress()} />
      <View style={{ display: 'flex', flexDirection: 'row', gap: 20 }}>
        <CKIcon name="shopping-cart" onPress={() => onPress()} color={COLORS.main.pink} />
        <CKIcon name="bell" onPress={() => onPress()} color={COLORS.main.pink} />
        <CKAvatar
          uri="https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-08-2.jpg.webp"
          size="sm"
          onPress={() => onPress()}
        />
      </View>
    </View>
  );
}
