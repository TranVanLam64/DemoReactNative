import React, { useState } from "react"
import { Image, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native"
import config from "../../../../config"
import { Constants } from "../../../main"
import styles from "./styles"
import { ButtonWrapper } from "../component"
import { useNavigation } from "@react-navigation/native"

const Term = () => {
  const navigation = useNavigation()
  const [isCheck, setIsCheck] = useState(false)
  return (
    <ScrollView contentContainerStyle={[styles.termContainer, Platform.OS == 'android' ? styles.padding40 : {}]} style={styles.flex1} >
        <Image style={styles.imageTerm} source={config.Icon.Term.image_term} />
        {Constants.TermMock.map((item, index) => (
          <View key={index} style={styles.itemTerm}>
            <Text style={styles.itemTextTerm}>{item}</Text>
          </View>
        ))}
        <TouchableOpacity onPress={() => setIsCheck(!isCheck)} style={styles.checkBoxContainer}>
          <View
            style={[
              styles.checkBox,
              isCheck ? styles.checkBoxChecked : styles.checkBoxUnChecked,
            ]}
          >
            {isCheck && <Image source={config.Icon.Term.image_check} />}
          </View>
          <Text style={styles.checkBoxText}>
            J’accepte les conditions de{"\n"}l’application
          </Text>
        </TouchableOpacity>
        <ButtonWrapper
          onBack={() => navigation.goBack}
          onSubmit={() => navigation.navigate(Constants.Screen.Dashboard)}
          spaceButton={12}
          isSubmitEnable={isCheck}
        />
    </ScrollView>
  )
}

export default Term
