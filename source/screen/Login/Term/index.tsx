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
        <View style={styles.checkBoxContainer}>
          <TouchableOpacity
            style={[
              styles.checkBox,
              isCheck ? styles.checkBoxChecked : styles.checkBoxUnChecked,
            ]}
            onPress={() => setIsCheck(!isCheck)}
          >
            {isCheck && <Image source={config.Icon.Term.image_check} />}
          </TouchableOpacity>
          <Text style={styles.checkBoxText}>
            J’accepte les conditions de{"\n"}l’application
          </Text>
        </View>
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
