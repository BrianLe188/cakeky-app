import { IScreenProps } from "@utils/types/global";
import { View, Text } from "react-native";

interface IHomeSectionProps extends IScreenProps {}

export default function HomeSection({ navigation }: IHomeSectionProps) {
  return (
    <View>
      <Text>home</Text>
    </View>
  );
}
