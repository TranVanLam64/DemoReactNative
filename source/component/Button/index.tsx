import React from "react"
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native"
import styles from "./styles"

interface ButtonFullProps {
  text: string
  icon: ImageSourcePropType
  isReverse?: boolean
  isCenter?: boolean
  customStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  onPress: () => void
}

const ButtonFull = ({ text, icon, isReverse, isCenter, customStyle, textStyle, onPress }: ButtonFullProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapperButton,
        isReverse && { flexDirection: "row-reverse" },
        customStyle
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle, (isCenter && isReverse) && { marginLeft: 8, marginRight: 0 }, (isCenter && !isReverse) && { marginRight: 8, marginLeft: 0 }]}>{text}</Text>
      <Image style={styles.icon24} source={icon} />
    </TouchableOpacity>
  )
}

export default ButtonFull
