import Topbar from 'src/domains/Main/components/Topbar';
import { View } from 'react-native';
import { IScreenProps } from '@share/utils/types/global';
import Category from '../components/Category';
import SlickMenu from '../components/SlickMenu';
import Categories from '../components/Categories';

interface IHomeTemplateProps extends IScreenProps {}

export default function HomeTemplate({ navigation }: IHomeTemplateProps) {
  return (
    <View>
      <Topbar />
      <SlickMenu title="Phân loại" subTitle="Xem thêm">
        <Categories />
      </SlickMenu>
    </View>
  );
}
