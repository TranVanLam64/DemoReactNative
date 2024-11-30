import React, { useState } from "react"
import { Image, SafeAreaView, Text, View } from "react-native"
import config from "../../../config"
import styles from "./styles"

const ToolBar = () => {
  const slideArr = new Array(7).fill(0)
  const [slideActive, setSlideActive] = useState(1)
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
          <Image
            style={styles.iconUser}
            source={config.Icon.Common.image_user}
          />
        </View>
      </View>
      <View style={styles.slideWrapper}>
        {slideArr.map((_, index) => (
          <View style={[styles.slideItem, index == 6 && styles.mr0, index <= slideActive && styles.slideActive]} key={index}></View>
        ))}
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Enchères à venir</Text>
        <Image style={styles.titleIcon} source={config.Icon.Common.image_home} />
      </View>
      <View style={styles.lineX}></View>
    </View>
  )
}

export default ToolBar
