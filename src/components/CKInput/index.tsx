import { TextInput, TextInputProps } from "react-native";

interface ICKInputProps extends TextInputProps {}

export default function CKInput({ ...props }: ICKInputProps) {
  return <TextInput {...props} />;
}
