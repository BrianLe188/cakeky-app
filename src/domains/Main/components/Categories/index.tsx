import { StyleSheet, View, ScrollView } from 'react-native';
import Category from '../Category';

interface ICategoriesProps {
  categories?: [];
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 15,
  },
});

export default function Categories({ categories }: ICategoriesProps) {
  return (
    <ScrollView horizontal>
      <View style={styles.wrapper}>
        <Category
          text="Bánh kem"
          imageUri="https://png.pngtree.com/png-clipart/20230914/original/pngtree-blue-three-dimensional-birthday-cake-png-image_12164410.png"
          checked
        />
        <Category
          text="Bánh ngọt"
          imageUri="https://cdn.pixabay.com/photo/2021/04/24/01/01/cupcake-6203012_960_720.png"
        />
        <Category
          text="Bánh mỳ"
          imageUri="https://png.pngtree.com/png-clipart/20240103/original/pngtree-hamburger-with-santa-hat-3d-rendering-png-image_14006246.png"
        />
        <Category
          text="Bánh ngọt"
          imageUri="https://cdn.pixabay.com/photo/2021/04/24/01/01/cupcake-6203012_960_720.png"
        />
        <Category
          text="Bánh mỳ"
          imageUri="https://png.pngtree.com/png-clipart/20240103/original/pngtree-hamburger-with-santa-hat-3d-rendering-png-image_14006246.png"
        />
      </View>
    </ScrollView>
  );
}
