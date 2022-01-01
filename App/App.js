import React from "react";

import DayScreen from "./screens/DayScreen";

// const db = openDatabase({ name: "mainDB" });

const color = "black";
const categories = [
   { name: "Back", color },
   { name: "Biceps", color },
   { name: "Chest", color },
   { name: "Core", color },
   { name: "Shoulders", color },
   { name: "Triceps", color }
];

const getCategory = input => categories[categories.findIndex(({ name }) => name === input)];

const date = new Date();
const yyyy = date.getFullYear();
const mm = date.getMonth();

const exercises = [
   {
      name: "Chin Ups",
      category: getCategory("Back"),
      type: "Reps"
   },
   {
      name: "Barbell Incline Press",
      category: getCategory("Chest"),
      type: "Reps"
   },
   {
      name: "OHP",
      category: getCategory("Shoulders"),
      type: "Reps"
   }
].map((exercise, index) => ({
   id: index,
   date: `${yyyy}-${mm}-${date.getDay() + index}`,
   ...exercise
}));

export default function App() {
   return <DayScreen exercises={exercises} />;
}
