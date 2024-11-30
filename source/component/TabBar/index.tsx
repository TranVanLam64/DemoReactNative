import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Constants } from '../../main'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const TabBar = () => {
  const navigation = useNavigation()
  const [activeTab, setActiveTab] = useState(Constants.Screen.Home)

  const onPress = (item) => {
    setActiveTab(item.screen)
    navigation.navigate(Constants.Screen.Dashboard, {
      screen: item.screen
    })
  }
  
  return (
    <View style={styles.tabBar}>
      {Constants.TabBar.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => onPress(item)}>
          <Image source={activeTab == item.screen ? item.iconActive : item.icon} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default TabBar
