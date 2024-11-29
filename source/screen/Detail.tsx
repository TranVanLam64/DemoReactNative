import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Constants } from '../main'

const Detail = () => {
    const navigation = useNavigation()
  return (
    <View>
      <Text>Detail</Text>
      <TouchableOpacity onPress={() => navigation.navigate(Constants.Screen.Home)}>
        <Text>Go to home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Detail
