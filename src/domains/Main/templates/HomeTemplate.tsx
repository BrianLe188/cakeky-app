import Topbar from 'src/domains/Main/components/Topbar';
import { View } from 'react-native';
import { IScreenProps } from '@share/utils/types/global';

interface IHomeTemplateProps extends IScreenProps {}

export default function HomeTemplate({ navigation }: IHomeTemplateProps) {
  return (
    <View>
      <Topbar />
    </View>
  );
}
