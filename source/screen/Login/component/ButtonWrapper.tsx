import React from 'react'
import { Image, TouchableOpacity, View, Text, StyleProp, ViewStyle } from 'react-native'
import config from '../../../../config'
import styles from "../styles.ts"

interface ButtonWrapperProps {
    onBack: () => void,
    onSubmit: () => void
    spaceButton: number
    isSubmitEnable?: boolean
}

const ButtonWrapper = ({ onBack, onSubmit, spaceButton, isSubmitEnable = true }: ButtonWrapperProps) => {
  return (
    <View style={styles.buttonLoginEmailContainer}>
        <TouchableOpacity
          style={[styles.buttonBack, { marginRight: spaceButton }]}
          onPress={onBack}
        >
          <Image
            style={styles.iconBack}
            source={config.Icon.Login.image_arrow_left}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonSubmit, !isSubmitEnable && styles.buttonSubmitDisable]}
          onPress={onSubmit}
          disabled={!isSubmitEnable}
        >
          <Text style={[styles.textButtonSubmit, !isSubmitEnable && styles.textButtonSubmitDisable]}>Créer mon compte</Text>
          <Image
            style={styles.iconBack}
            source={isSubmitEnable ? config.Icon.Login.image_arrow_right : config.Icon.Login.image_arrow_right_disable}
          />
        </TouchableOpacity>
      </View>
  )
}

export default ButtonWrapper
