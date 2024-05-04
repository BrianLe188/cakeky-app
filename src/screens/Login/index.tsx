import { View } from "react-native";
import CKAvatar from "src/components/CKAvatar";
import CKButton from "src/components/CKButton";

export default function Login() {
  const handlePress = () => {
    console.log("Button pressed!");
  };

  const handleAvatar = () => {
    console.log("Avatar pressed!");
  };

  return (
    <View style={{ marginTop: 100 }}>
      <CKButton title="Tiếp tục" onPress={handlePress} variant="main" />
      <CKButton title="Tiếp tục" onPress={handlePress} variant="success" />
      <CKButton title="Tiếp tục" onPress={handlePress} variant="danger" />
      <CKButton title="Tiếp tục" onPress={handlePress} variant="info" />
      <CKButton title="Tiếp tục" onPress={handlePress} variant="warn" />

      {/* Avatar Component */}
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <CKAvatar uri={'https://i.pinimg.com/564x/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg'} size='sm' onPress={handleAvatar} />
        <CKAvatar uri={'https://i.pinimg.com/564x/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg'} size='md' onPress={handleAvatar} />
        <CKAvatar uri={'https://i.pinimg.com/564x/2b/0f/7a/2b0f7a9533237b7e9b49f62ba73b95dc.jpg'} size='lg' onPress={handleAvatar} />
      </View>
    </View>
  );
}
