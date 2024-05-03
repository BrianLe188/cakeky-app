import { View } from "react-native";
import CKButton from "../../components/CKButton";

export default function Login() {
  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={{ marginTop: 100 }}>
      <CKButton title="Tiếp tục" onPress={handlePress} variant="main" />
    </View>
  );
}
