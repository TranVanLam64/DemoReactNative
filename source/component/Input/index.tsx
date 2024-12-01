import React from "react"
import {
  Image,
  Text,
  View,
  TextInput
} from "react-native"
import styles from "./styles"
import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native"

interface InputProps {
  label: string
  placeholder: string
  iconLeft?: ImageSourcePropType
  iconRight?: ImageSourcePropType
  isInputRow?: boolean
  customStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  isSecurity?: boolean
  maxLength?: number
}

const InputCustom = ({
  label,
  placeholder,
  iconLeft,
  iconRight,
  isInputRow = false,
  customStyle,
  labelStyle,
  isSecurity = false,
  maxLength,
}: InputProps) => {
  return (
    <View style={[styles.inputWrapper, isInputRow && { flex: 1 }, customStyle]}>
      <Text style={[styles.inputLabel, labelStyle]}>{label}</Text>
      <View style={[styles.inputView]}>
        {iconLeft && <Image style={styles.icon20} source={iconLeft} />}
        <TextInput
          {...(maxLength !== undefined && { maxLength })}
          secureTextEntry={isSecurity}
          style={[
            styles.inputText,
            !iconLeft && { marginLeft: 0 },
            !iconRight && { marginRight: 0 },
          ]}
          placeholder={placeholder}
        />
        {iconRight && <Image style={styles.icon20} source={iconRight} />}
      </View>
    </View>
  )
}

export default InputCustom
