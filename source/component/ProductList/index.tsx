import React, { useEffect, useState } from "react"
import { Dimensions, View } from "react-native"
import Constants, { DateRelease, Product } from "../../main/Constants";
import ProductCard from "../ProductCard";
import styles from "./styles";

interface ProductListInterface {
    history: boolean
}

const ProductList = ({ history } : ProductListInterface) => {
  const [combinedData, setCombinedData] = useState<
    (Product | { type: string; title: string })[]
  >([])
  const screenWidth = Dimensions.get("window").width
  const numColumns = 2
  const itemSpacing = 12
  const itemWidth = (screenWidth - itemSpacing * (numColumns + 1)) / numColumns

  useEffect(() => {
    const productTodayArr = [...Constants.ProductMock].filter(
      (it) => it.dateRelease == DateRelease.Today
    )
    const productTomorrowArr = [...Constants.ProductMock].filter(
      (it) => it.dateRelease == DateRelease.Tomorrow
    )

    const combinedData = [
      { type: "title", title: "Aujourd’hui" },
      ...productTodayArr,
      { type: "title", title: "Demain" },
      ...productTomorrowArr,
    ]
    setCombinedData(combinedData)
  }, [])
  const renderRows = () => {
    const rows = []
    let countTitle = 0
    for (let i = 0; i < combinedData.length; i++) {
      const item = combinedData[i]
      if ("type" in item && "title" in item && item?.type === "title") {
        rows.push(
          <View style={styles.rowTitle} key={i}>
            <ProductCard item={item} index={0} history={history} />
          </View>
        )
        countTitle++
      } else {
        const rowItems = combinedData.slice(i, i + numColumns)
        rows.push(
          <View style={styles.rowProduct} key={i}>
            {rowItems.map((productItem, index) => {
              const productIndex = i + index - countTitle
              return (
                <View
                  key={index}
                  style={{
                    width: itemWidth,
                  }}
                >
                  <ProductCard
                    item={productItem}
                    index={productIndex}
                    history={history}
                  />
                </View>
              )
            })}
          </View>
        )
        i++
      }
    }
    return rows
  }

  return renderRows()
}

export default ProductList
