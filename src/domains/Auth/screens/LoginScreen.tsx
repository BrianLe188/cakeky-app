import { IScreenProps } from '@share/utils/types/global';
import LoginTemplate from '../templates/LoginTemplate';

export default function Login({ navigation }: IScreenProps) {
  return <LoginTemplate navigation={navigation} />;
}
