import React, { useState } from "react"
import {
  Alert,
  Image,
  ImageSourcePropType,
  Keyboard,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import "./styles"
import styles from "./styles"
import config from "../../../config"
import { Constants, Global, Setting } from "../../main"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { ButtonWrapper } from "./component"
import { useNavigation } from "@react-navigation/native"
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '905729071849-mb1hv8fmtikss0lnm5hbpscjnh49en29.apps.googleusercontent.com',
});

const Login = () => {
  const navigation = useNavigation()
  const [isShowLoginEmail, setIsShowLoginEmail] = useState(false)
  const [isShowSlide, setIsShowSlide] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isShowPassword, setIsShowPassword] = useState(false)
  const arrayDot = new Array(5).fill(0)
  const [slideActive, setSlideActive] = useState(0)

  const onSubmit = () => {
    if (
      email.toLowerCase().trim() == Constants.AccountMock.email &&
      password == Constants.AccountMock.password
    ) {
      setIsShowLoginEmail(false)
      setIsShowSlide(true)
      Global.isLogin = true
      Setting.set(Constants.Event.isLogin, true)
    }
  }

  const onGoogleButtonPress = async () => {
    try {
      // Lấy thông tin người dùng từ Google
      const { idToken } = await GoogleSignin.signIn();
      
      // Tạo credential cho Firebase
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      // Đăng nhập Firebase
      const userCredential = await auth().signInWithCredential(googleCredential);

      Alert.alert('Thành công!', `Chào ${userCredential.user.displayName}`);
    } catch (error) {
      console.error(error);
      Alert.alert('Lỗi!', 'Không thể đăng nhập.');
    }
  };

  const renderButtonLogin = (
    text: String,
    icon: ImageSourcePropType,
    action: () => void
  ) => {
    return (
      <TouchableOpacity style={styles.buttonLogin} onPress={action}>
        <Image style={styles.iconButtonLogin} source={icon} />
        <Text>{text}</Text>
      </TouchableOpacity>
    )
  }

  const renderLoginEmail = () => {
    return (
      <View style={styles.inputContainer}>
        <View style={[styles.inputWrapper, styles.mb24]}>
          <Text style={styles.labelInput}>Adresse mail</Text>
          <View style={styles.inputView}>
            <Image
              style={styles.iconInput}
              source={config.Icon.Login.image_email}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => setEmail(value)}
              placeholder="Adresse@mail.com"
            />
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.labelInput}>Mot de passe</Text>
          <View style={styles.inputView}>
            <Image
              style={styles.iconInput}
              source={config.Icon.Login.image_key}
            />
            <TextInput
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={!isShowPassword}
              style={styles.textInput}
              placeholder="Motdepasse"
            />
            <TouchableOpacity
              onPress={() => setIsShowPassword(!isShowPassword)}
            >
              <Image source={config.Icon.Login.image_eye} />
            </TouchableOpacity>
          </View>
        </View>
        <ButtonWrapper onBack={() => setIsShowLoginEmail(false)} onSubmit={onSubmit} spaceButton={24} />
      </View>
    )
  }

  const renderHeroIntro = (
    text: string,
    image: ImageSourcePropType,
    isShowTextImage: boolean
  ) => {
    return (
      <View style={{ alignItems: "flex-start", width: "100%" }}>
        <Image style={styles.loginImage} source={image} />
        <View style={styles.loginHeroText}>
          <Text style={styles.textHero}>{text}</Text>
          {isShowTextImage && (
            <Image
              style={styles.imageHero}
              source={config.Icon.Login.image_hero}
            />
          )}
        </View>
      </View>
    )
  }

  const renderButtonLoginContainer = () => {
    return (
      <View style={styles.containerButton}>
        {renderButtonLogin(
          "Connection avec Google",
          config.Icon.Login.image_google,
          () => onGoogleButtonPress()
        )}
        <View style={styles.line}></View>
        {renderButtonLogin(
          "Connection avec Mail",
          config.Icon.Login.image_email,
          () => {
            setIsShowLoginEmail(true)
          }
        )}
      </View>
    )
  }

  const onBackSlide = (index: number) => {
    if (index == 0) {
      setIsShowLoginEmail(true)
      setIsShowSlide(false)
    } else {
      setSlideActive(index - 1)
    }
  }

  const onNextSlide = (index: number) => {
    if (index == 2) {
      navigation.navigate(Constants.Screen.Term)
    } else {
      setSlideActive(index + 1)
    }
  }

  const onPressDot = (index: number) => {
    if (index == 3 || index == 4) return
    setSlideActive(index)
  }

  const renderSlide = () => {
    return (
      <View
        style={{ flex: 1, justifyContent: "space-between", paddingBottom: 136 }}
      >
        <Text style={styles.textSlide}>
          {Constants.SlideMock[slideActive].textSlide}
        </Text>
        <View style={styles.containerPagination}>
          <TouchableOpacity
            style={styles.buttonBackSlide}
            onPress={() => onBackSlide(slideActive)}
          >
            <Image
              style={styles.iconBack}
              source={config.Icon.Login.image_arrow_left}
            />
          </TouchableOpacity>
          <View style={styles.dotWrapper}>
            {arrayDot.map((_, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dot,
                  slideActive == index && styles.dotActive,
                  index == 4 && styles.mr0,
                ]}
                onPress={() => onPressDot(index)}
              ></TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={styles.buttonNext}
            onPress={() => onNextSlide(slideActive)}
          >
            <Image source={config.Icon.Login.image_arrow_right} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const renderMainContainer = () => {
    if (isShowLoginEmail) {
      return renderLoginEmail()
    } else if (isShowSlide) {
      return renderSlide()
    } else {
      return renderButtonLoginContainer()
    }
  }

  return (
    <KeyboardAwareScrollView
      bounces={false}
      scrollEnabled={false}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid={true}
      keyboardOpeningTime={0}
      enableAutomaticScroll={true}
      extraScrollHeight={Platform.OS === "android" ? 80 : 40}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          {renderHeroIntro(
            isShowSlide
              ? Constants.SlideMock[slideActive].textHero
              : "Créer un compte",
            Constants.SlideMock[slideActive].image,
            Constants.SlideMock[slideActive].isShowTextImage
          )}
          {renderMainContainer()}
        </>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

export default Login
