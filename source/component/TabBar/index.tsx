import React, { useEffect, useState } from "react"
import { View, Image, TouchableOpacity } from "react-native"
import { Constants, EventBus } from "../../main"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import DeviceInfo from "react-native-device-info"

const TabBar = () => {
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState(Constants.Screen.Home)

  useEffect(() => {
    const setActiveProfile = () => {
      setActiveTab(Constants.Screen.Profile)
    }
    EventBus.on(Constants.Event.goToProfile, () => setActiveProfile())

    return () => {
      EventBus.off(Constants.Event.goToProfile, () => setActiveProfile())
    }
  }, [])

  const onPress = (item) => {
    setActiveTab(item.screen)
    navigation.navigate(Constants.Screen.Dashboard, {
      screen: item.screen,
    })
  }

  return (
    <View style={[styles.tabBar, DeviceInfo.hasNotch() ? { top: -6 } : {}]}>
      {Constants.TabBar.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => onPress(item)}>
          <Image
            source={activeTab == item.screen ? item.iconActive : item.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default TabBar
