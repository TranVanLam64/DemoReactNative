import React, { useState } from "react"
import { ToolBar } from "../../component"
import config from "../../../config"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"

const Payment = () => {
    const [quantity, setQuantity] = useState(25)
    const onChangeQuantity = (isPlus: boolean) => {
        if(quantity == 0 && !isPlus) return
        setQuantity(prev => isPlus ? (prev + 5) : (prev - 5))
    }
  const renderButtonQuantity = () => {
    return (
      <View style={styles.wrapperQuantity}>
        <TouchableOpacity style={styles.buttonQuantity} onPress={() => onChangeQuantity(false)}>
          <Text style={styles.buttonQuantityText}>-5€</Text>
        </TouchableOpacity>
        <View style={styles.wrapperQuantityValue}>
          <Text style={styles.wrapperQuantityValueText}>{quantity}</Text>
          <Image
            style={styles.icon32}
            source={config.Icon.Common.image_currency_euro}
          />
        </View>
        <TouchableOpacity style={styles.buttonQuantity} onPress={() => onChangeQuantity(true)}>
          <Text style={styles.buttonQuantityText}>+5€</Text>
        </TouchableOpacity>
      </View>
    )
  }
  const renderButtonHeader = () => {
    return (
      <View style={styles.wrapperButtonHeader}>
        <TouchableOpacity style={styles.buttonHeaderLeft}>
          <Text style={styles.buttonHeaderLeftText}>43</Text>
          <Image
            style={styles.buttonHeaderIcon}
            source={config.Icon.Common.image_coconut_white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonHeaderRight}>
          <Text style={styles.buttonHeaderRightText}>Plus de QOQO’s ?</Text>
          <Image
            style={styles.buttonHeaderIcon}
            source={config.Icon.Common.image_coconut_black}
          />
        </TouchableOpacity>
      </View>
    )
  }
  const renderContainerPayment = () => {
    return (
      <View style={styles.containerPayment}>
        <View style={styles.containerPaymentTop}>
          <Image
            style={styles.paymentTopImage}
            source={config.Icon.Login.image_login}
          />
        </View>
        <View style={styles.containerPaymentBottom}>
          <Text style={styles.paymentBottomTitle}>Acheter des QOQO’s</Text>
          <Text style={styles.paymentBottomDesc}>
            Plus tu achètes de QOQO's, plus tu en reçois en bonus !
          </Text>
          <TouchableOpacity style={styles.wrapperPoint}>
            <View style={styles.wrapperTextIcon}>
              <Text style={styles.pointCoconut}>2500</Text>
              <Image
                style={styles.icon32}
                source={config.Icon.Common.image_coconut_white}
              />
            </View>
            <View style={styles.wrapperTextIcon}>
              <Text style={styles.pointPlusCoconut}>+ 200</Text>
              <Image
                style={styles.icon16}
                source={config.Icon.Common.image_coconut_gray}
              />
            </View>
          </TouchableOpacity>
          {renderButtonQuantity()}
          <TouchableOpacity style={styles.wrapperButtonSubmit}>
            <Text style={styles.buttonSubmitText}>Acheter</Text>
            <Image
              style={styles.icon24}
              source={config.Icon.Common.image_bank_note}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  return (
    <>
      <ToolBar title="Recharge" icon={config.Icon.Common.image_coconut_white} />
      <ScrollView bounces={false}>
        {renderButtonHeader()}
        {renderContainerPayment()}
      </ScrollView>
    </>
  )
}

export default Payment
