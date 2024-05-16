import CKButton from 'src/share/components/CKButton';
import CKInput from 'src/share/components/CKInput';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { TITLE } from '../constants';
import { IScreenProps } from '@share/utils/types/global';
import { ROUTES, TEXTS } from '@share/utils/constants/global';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

interface ILoginTemplateProps extends IScreenProps {}

export default function LoginTemplate({ navigation }: ILoginTemplateProps) {
  const handleLogin = () => {
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <View style={styles.page}>
      <View style={styles.decorBall} />
      <View style={[styles.screenBackground]}>
        <Image style={styles.imageWelcome} source={require('@assets/images/login-welcome.png')} />
      </View>
      <View style={styles.formLogin}>
        <Text style={styles.title}>{TITLE}</Text>
        <View style={styles.fieldWrapper}>
          <CKInput placeholder="example@gmail.com" variant="nude" keyboardType="email-address" />
          <CKInput placeholder="******" variant="nude" secureTextEntry />
          <CKButton
            title={TEXTS.LOGIN}
            style={styles.loginButton}
            onPress={handleLogin}
            variant="main"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  screenBackground: {
    backgroundColor: '#FCD1E3',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  imageWelcome: {
    marginTop: 100,
  },
  formLogin: {
    width: '100%',
    height: '55%',
    backgroundColor: '#FFECFB',
    borderTopLeftRadius: 120,
    borderTopRightRadius: 120,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  fieldWrapper: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    display: 'flex',
    alignItems: 'center',
    rowGap: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 30,
  },
  loginButton: {
    width: '80%',
  },
  decorBall: {
    width: 77,
    height: 77,
    position: 'absolute',
    top: 100,
    left: 50,
    zIndex: 1,
    backgroundColor: '#97D4FF',
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
  },
});
