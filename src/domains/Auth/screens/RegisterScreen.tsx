import { IScreenProps } from '@share/utils/types/global';
import RegisterTemplate from '../templates/RegisterTemplate';

export default function Register({ navigation }: IScreenProps) {
  return <RegisterTemplate navigation={navigation} />;
}
