import React, { useEffect } from "react"
import { Image, View } from "react-native"
import config from "../../../config"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Constants, Setting } from "../../main"

const Splash = () => {
  const navigation = useNavigation()

  useEffect(() => {
    const timer = setTimeout(async () => {
      const isLogin = await Setting.get(Constants.Event.isLogin)
      if (isLogin == "true") {
        navigation.navigate(Constants.Screen.Dashboard)
      } else {
        navigation.navigate(Constants.Screen.Login)
      }
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={styles.containerSplash}>
      <Image
        style={styles.contentSplash}
        source={config.Icon.Login.image_login}
      />
    </View>
  )
}

export default Splash
