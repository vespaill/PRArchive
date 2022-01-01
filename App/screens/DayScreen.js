import React from "react";
import { FlatList, View } from "react-native";
import Exercise from "../components/Exercise";

export default function DayScreen({ exercises }) {
   return (
      <View>
         <FlatList
            data={exercises}
            keyExtractor={exercise => exercise.id}
            renderItem={({ item }) => <Exercise {...item} />}
         />
      </View>
   );
}
