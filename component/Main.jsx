import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
export const Main = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
      <View style={{ marginLeft: 20, marginTop: 0 }}>
          <Text style={styles.mainText}> 갓생하고살자 </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  mainText: {
    fontFamily: "GothicThin",
    fontSize: 40,
    color: "#f2f1f7",
  },
  cardText: {
    fontFamily: "GothicLight",
    fontSize: 50,
    color: "#f2f1f7",
    marginTop: 20,
  },
  card: {
    borderRadius: 10,
    width: "80%",
    height: 300,
    backgroundColor: "#3b4054",
    shadowColor: "#3b4054",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    marginBottom:10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImg: {
    width: 150,
    height: 150,
  }
});
