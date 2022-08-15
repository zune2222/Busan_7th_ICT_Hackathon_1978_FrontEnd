import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import { Main } from "../component/Main";
const Tab = createBottomTabNavigator();
const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          borderTopColor: "#3c3f44",
          backgroundColor: "#EEEDED",
          height: 80,
          borderTopWidth: 0.2,
          paddingTop: 10,
        },
        headerShown: true,
        headerTransparent: true,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#71778d",
      })}
    >
      <Tab.Screen
        name="Home"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.tabIcon}
              source={
                focused
                  ? require("../assets/image/home.png")
                  : require("../assets/image/homeNotFocus.png")
              }
            />
          ),
        }}
        component={Main}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25,
  },
});
export default BottomStack;
