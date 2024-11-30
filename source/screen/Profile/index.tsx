import React from "react"
import { ToolBar } from "../../component"
import { Image, Text, View } from "react-native"
import config from "../../../config"
import styles from "./styles"
import Svg, { Circle } from "react-native-svg"

const Profile = () => {
  const CustomProgressRing = () => {
    const size = 60
    const strokeWidth = 10
    const radius = (size - strokeWidth) / 2
    const circumference = 2 * Math.PI * radius
    const progress = 75

    const strokeDashoffset = circumference - (progress / 100) * circumference

    return (
      <View>
        <Svg height={size} width={size}>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#56698F"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#4ABF40"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            rotation={-90}
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>
      </View>
    )
  }

  return (
    <>
      <ToolBar isProfile={true} />
      <View style={styles.wrapperTitle}>
        <Image
          style={styles.icon20}
          source={config.Icon.Common.image_left_arrow_long}
        />
        <Text style={[styles.textTitle, styles.textTitleGray]}>Mon Compte</Text>
        <Text style={[styles.textTitle, styles.textTitleGray]}>/</Text>
        <Text style={[styles.textTitle, styles.textTitleWhite]}>
          Mes informations
        </Text>
      </View>
      <View>{CustomProgressRing()}</View>
    </>
  )
}

export default Profile
