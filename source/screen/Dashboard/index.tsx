import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { Text, View } from "react-native"
import { Constants } from "../../main"
import Home from "../Home"
import Story from "../Story"
import { TabBar } from "../../component"

const Tab = createBottomTabNavigator()

const commonNavigationOption: any = {
    headerShown: false,
    gestureEnabled: true
}

const Dashboard = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName={Constants.Screen.Home}
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{
            sceneStyle: {
                backgroundColor: Constants.Color.AppColor,
                paddingHorizontal: 12
            }
        }}
      >
        <>
          <Tab.Screen
            name={Constants.Screen.Home}
            component={Home}
            options={commonNavigationOption}
          />
          <Tab.Screen
            name={Constants.Screen.Story}
            component={Story}
            options={commonNavigationOption}
          />
          <Tab.Screen
            name={Constants.Screen.Payment}
            component={Home}
            options={commonNavigationOption}
          />
          <Tab.Screen
            name={Constants.Screen.Profile}
            component={Home}
            options={commonNavigationOption}
          />
        </>
      </Tab.Navigator>
    </>
  )
}

export default Dashboard
