import React from "react";
import { StatusBar, StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0
   },
   item: {
      backgroundColor: "#F9C2FF",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
   },
   title: {
      fontSize: 32
   }
});

export default function Exercise({ name, category, type, id, date }) {
   return (
      <View style={styles.item}>
         <Text style={styles.title}>{name}</Text>
      </View>
   );
}

