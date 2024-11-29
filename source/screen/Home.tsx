import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Constants } from '../main'

const Home = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate(Constants.Screen.Detail)}>
        <Text>Go to detail</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
