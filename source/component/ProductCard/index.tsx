import React from "react"
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { Product } from "../../main/Constants"
import config from "../../../config"
import { Utils } from "../../main"

interface ProductCardInterface {
  item: Product | { type: string; title: string }
  index: number
  history: boolean
}

const ProductCard = ({ item, index, history }: ProductCardInterface) => {
  const screenWidth = Dimensions.get("window").width
  const numColumns = 2
  const itemSpacing = 12
  const itemWidth = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns
  const borderColors = ["#56698F", "#4ABF40", "#C7577C", "#EDBD57"]
  const borderColor = borderColors[index % 4]
  if ("type" in item && "title" in item) {
    return (
      <View style={styles.titleWrapper}>
        <Image
          style={styles.titleIcon}
          source={config.Icon.Product.image_calendar}
        />
        <Text style={styles.titleText}>{item?.title}</Text>
      </View>
    )
  }
  return (
    <TouchableOpacity
      style={[
        styles.productItem,
        { width: itemWidth, borderColor: borderColor },
      ]}
    >
      <Image source={item?.image} blurRadius={history ? 0 : 8} />
      <View style={styles.productDesc}>
        <Text style={styles.statusText}>
          {history ? item.name : "Bientôt disponible"}
        </Text>
        <View style={styles.wrapperPrice}>
          <Text style={styles.priceShopText}>Prix magasin</Text>
          <Text style={styles.priceText}>
            {Utils.formatPrice(item?.price)}€
          </Text>
          <View style={styles.priceCoconutWrapper}>
            <Text style={styles.priceCoconutText}>
              = {Utils.formatPrice(item?.coconutPrice)}
            </Text>
            <Image
              style={styles.priceCoconutIcon}
              source={config.Icon.Common.image_coconut_gray}
            />
          </View>
        </View>
        {history && (
          <>
            <View style={[styles.wrapperGray, styles.w100, styles.between]}>
              <Text style={styles.priceShopText}>Participation</Text>
              <View style={styles.isJoinWrapper}>
                <Text style={styles.priceShopText}>
                  {item.isJoin ? "Oui" : "Non"}
                </Text>
                <View
                  style={[
                    styles.isJoinDot,
                    item.isJoin && styles.isJoinDotActive,
                  ]}
                ></View>
              </View>
            </View>
            <View style={styles.flexRow}>
              <View style={[styles.wrapperGray, styles.mr8, styles.flex1]}>
                <Image
                  style={styles.wrapperGrayIcon}
                  source={config.Icon.Product.image_calendar_fill}
                />
                <Text style={styles.priceShopText}>{item.dateJoin}</Text>
              </View>
              <View style={[styles.wrapperGray, styles.mw70]}>
                <Image
                  style={styles.wrapperGrayIcon}
                  source={config.Icon.Product.image_hamer_fill}
                />
                <Text style={styles.priceShopText}>
                  {item.quantityJoin.toString()}
                </Text>
              </View>
            </View>
            <View style={styles.wrapperPricePay}>
              <Text style={styles.priceShopText}>Vendu à</Text>
              <View style={styles.wrapperPricePayCoconut}>
                <Text style={styles.statusText}>
                  {Utils.formatPrice(item.pricePay)}
                </Text>
                <Image
                  style={styles.pointIcon}
                  source={config.Icon.Common.image_nav_payment_active}
                />
              </View>
            </View>
          </>
        )}
        <View style={styles.pointCoconutWrapper}>
          <Text style={styles.pointCoconutText}>
            {history ? "Récupérer" : "Débloquer"}
          </Text>
          <View style={styles.pointWrapper}>
            <Text style={styles.pointText}>
              {history
                ? (item?.coconutPointPlus > 0 ? "+" : "") +
                  Utils.formatPrice(item?.coconutPointPlus)
                : Utils.formatPrice(item?.coconutPoint)}
            </Text>
            <Image
              style={styles.pointIcon}
              source={config.Icon.Common.image_nav_payment_active}
            />
          </View>
        </View>
      </View>
      {history && (
        <View style={styles.wrapperUserStatus}>
          <View style={styles.wrapperUserInfo}>
            <Image style={styles.userAvatar} source={item.userPay.image} />
            <View>
              <Text style={styles.priceShopText}>{item.userPay.name}</Text>
              <Text style={styles.userLocation}>{item.userPay.location}</Text>
            </View>
          </View>
          <Text style={styles.userStatusPay}>{item.userPay.status}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default ProductCard
