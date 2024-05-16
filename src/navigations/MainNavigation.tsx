import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import { HomeScreen } from 'src/domains/Main';
import { ROUTES } from '@share/utils/constants/global';

const MainStack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={ROUTES.AUTH} component={AuthNavigation} />
      <MainStack.Screen name={ROUTES.HOME} component={HomeScreen} />
    </MainStack.Navigator>
  );
}
