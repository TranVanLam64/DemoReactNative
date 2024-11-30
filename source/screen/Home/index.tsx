import React from "react"
import { ScrollView } from "react-native"
import { ProductList, ToolBar } from "../../component"
import config from "../../../config"

const Home = () => {
  return (
    <>
      <ToolBar title="Enchères à venir" icon={config.Icon.Common.image_home} />
      <ScrollView>
        <ProductList history={false} />
      </ScrollView>
    </>
  )
}

export default Home
