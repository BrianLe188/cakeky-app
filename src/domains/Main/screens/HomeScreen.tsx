import { IScreenProps } from '@share/utils/types/global';
import HomeTemplate from '../templates/HomeTemplate';

export default function Home({ navigation }: IScreenProps) {
  return <HomeTemplate navigation={navigation} />;
}
