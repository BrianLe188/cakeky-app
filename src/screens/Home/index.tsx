import HomeSection from "@sections/Home";
import { IScreenProps } from "@utils/types/global";

export default function Home({ navigation }: IScreenProps) {
  return <HomeSection navigation={navigation} />;
}
