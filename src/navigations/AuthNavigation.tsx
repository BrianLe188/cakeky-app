import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@share/utils/constants/global';
import { LoginScreen, RegisterScreen } from 'src/domains/Auth';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
