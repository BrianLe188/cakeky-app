import { View } from "react-native";
import CKAvatar from "src/components/CKAvatar";
import CKButton from "src/components/CKButton";
import CKInput from "src/components/CKInput";

export default function LoginSection() {
  return (
    <View style={{ marginTop: 100 }}>
      <CKButton title="Tiếp tục" onPress={() => {}} variant="main" />
      <CKButton title="Tiếp tục" onPress={() => {}} variant="success" />
      <CKButton title="Tiếp tục" onPress={() => {}} variant="danger" />
      <CKButton title="Tiếp tục" onPress={() => {}} variant="info" />
      <CKButton title="Tiếp tục" onPress={() => {}} variant="warn" />

      <CKButton title="Tiếp tục" onPress={() => {}} variant="main" />

      {/* Avatar Component */}
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <CKAvatar
          uri={
            "https://i.pinimg.com/564x/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg"
          }
          size="sm"
          onPress={() => {}}
        />
        <CKAvatar
          uri={
            "https://i.pinimg.com/564x/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg"
          }
          size="md"
          onPress={() => {}}
        />
        <CKAvatar
          uri={
            "https://i.pinimg.com/564x/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg"
          }
          size="lg"
          onPress={() => {}}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <CKInput placeholder="hahah" />
      </View>
    </View>
  );
}
