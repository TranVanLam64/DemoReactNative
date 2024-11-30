import React, { useState } from "react"
import {
  Image,
  ImageSourcePropType,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import config from "../../../config"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"
import { Constants, EventBus } from "../../main"

interface ToolBarProps {
  title?: string
  icon?: ImageSourcePropType
  isProfile?: boolean
}

const ToolBar = ({ title, icon, isProfile = false }: ToolBarProps) => {
  const navigation = useNavigation()
  const slideArr = new Array(7).fill(0)
  const [slideActive, setSlideActive] = useState(1)

  const onGoToProfile = () => {
    if(!isProfile) {
      navigation.navigate(Constants.Screen.Dashboard, { screen: Constants.Screen.Profile })
    }
    EventBus.emit(Constants.Event.goToProfile)
  }

  return (
    <View>
      <SafeAreaView />
      <View style={styles.header}>
        <Image style={styles.logo} source={config.Icon.Common.logo_app} />
        <View style={styles.headerRight}>
          <View style={styles.headerRightCoconut}>
            <Text style={styles.headerRightText}>43</Text>
            <Image
              style={styles.iconCoconut}
              source={config.Icon.Common.image_coconut}
            />
          </View>
          <View style={styles.lineY}></View>
          <TouchableOpacity onPress={() => onGoToProfile()}>
            <Image
              style={styles.iconUser}
              source={
                isProfile
                  ? config.Icon.Common.image_setting
                  : config.Icon.Common.image_user
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.slideWrapper, isProfile && { marginBottom: 0 }]}>
        {slideArr.map((_, index) => (
          <View
            style={[
              styles.slideItem,
              index == 6 && styles.mr0,
              index <= slideActive && styles.slideActive,
            ]}
            key={index}
          ></View>
        ))}
      </View>
      {!isProfile && (
        <>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleText}>{title}</Text>
            <Image style={styles.titleIcon} source={icon} />
          </View>
          <View style={styles.lineX}></View>
        </>
      )}
    </View>
  )
}

export default ToolBar
