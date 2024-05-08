import LoginSection from "@sections/Login";
import { IScreenProps } from "@utils/types/global";

export default function Login({ navigation }: IScreenProps) {
  return <LoginSection navigation={navigation} />;
}
