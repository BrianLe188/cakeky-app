import Topbar from 'src/domains/Main/components/Topbar';
import { View } from 'react-native';
import { IScreenProps } from '@share/utils/types/global';
import Category from '../components/Category';

interface IHomeTemplateProps extends IScreenProps { }

export default function HomeTemplate({ navigation }: IHomeTemplateProps) {
  return (
    <View>
      <Topbar />
      <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
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
      </View>
    </View>
  );
};


