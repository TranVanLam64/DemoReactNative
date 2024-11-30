import React from "react"
import { ScrollView, View } from "react-native"
import { ProductList, ToolBar } from "../../component"
import config from "../../../config"
import styles from "./styles"

const Story = () => {
  return (
    <View>
      <ToolBar
        title="Historique des enchères"
        icon={config.Icon.Common.image_history}
      />
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        <ProductList history={true} />
      </ScrollView>
    </View>
  )
}

export default Story
