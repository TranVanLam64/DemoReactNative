import AsyncStorage from "@react-native-async-storage/async-storage"

const set = async (key: string, value: any) => {
  try {
    const stringValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, stringValue)
    console.log("Data saved!")
  } catch (error) {
    console.error("Error saving data:", error)
  }
}

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      console.log("Retrieved value:", value)
      return value
    }
  } catch (error) {
    console.error("Error retrieving data:", error)
  }
}

export default {
  get,
  set,
}
