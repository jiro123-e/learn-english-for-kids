"use client";

import { useState } from "react";
import WordCard from "@/components/WordCard";

type WordItem = {
  word: string;
  image: string;
};

type CategoryName = "Fruits" | "Animals" | "Colors";

const categories: Record<CategoryName, WordItem[]> = {
  Fruits: [
  { word: "Apple", image: "/apple.png" },
  { word: "Banana", image: "/banana.png" },
  { word: "Grapes", image: "/grapes.png" },
  { word: "Pineapple", image: "/pineapple.jpg" },
  { word: "Mango", image: "/mango.png" },
  { word: "Strawberry", image: "/strawberry.png" },
  { word: "Watermelon", image: "/watermelon.png" },
  { word: "Orange", image: "/orange.png" },
  { word: "Papaya", image: "/papaya.png" },
  { word: "Kiwi", image: "/kiwi.png" },
  { word: "Peach", image: "/peach.png" },
  { word: "Cherry", image: "/cherry.png" },
  { word: "Lemon", image: "/lemon.png" },
  { word: "Blueberry", image: "/blueberry.png" },
  { word: "Avocado", image: "/avocado.png" },
  { word: "Pomegranate", image: "/pomegranate.png" },
  { word: "Guava", image: "/guava.png" },
],

  Animals: [
  { word: "Dog", image: "/dog.png" },
  { word: "Cat", image: "/cat.png" },
  { word: "Cow", image: "/cow.png" },
  { word: "Pig", image: "/pig.png" },
  { word: "Horse", image: "/horse.png" },
  { word: "Sheep", image: "/sheep.png" },
  { word: "Goat", image: "/goat.png" },
  { word: "Chicken", image: "/chicken.png" },
  { word: "Duck", image: "/duck.png" },
  { word: "Bird", image: "/bird.png" },
  { word: "Fish", image: "/fish.png" },
  { word: "Lion", image: "/lion.png" },
  { word: "Tiger", image: "/tiger.png" },
  { word: "Elephant", image: "/elephant.png" },
  { word: "Giraffe", image: "/giraffe.png" },
  { word: "Monkey", image: "/monkey.png" },
  { word: "Bear", image: "/bear.png" },
  { word: "Rabbit", image: "/rabbit.png" },
  { word: "Frog", image: "/frog.png" },
  { word: "Turtle", image: "/turtle.png" },
],

  Colors: [
  { word: "Red", image: "/red.png" },
  { word: "Blue", image: "/blue.png" },
  { word: "Yellow", image: "/yellow.png" },
  { word: "Green", image: "/green.png" },
  { word: "Orange", image: "/orangecol.png" },
  { word: "Purple", image: "/purple.png" },
  { word: "Pink", image: "/pink.png" },
  { word: "Brown", image: "/brown.png" },
  { word: "Black", image: "/black.png" },
  { word: "White", image: "/white.png" },
],

};

export default function Home() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryName>("Fruits");


  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        Learn English Words!
      </h1>

      {/* CATEGORY BUTTONS */}
      <div className="flex justify-center gap-3 mb-6">
        {(Object.keys(categories) as CategoryName[]).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition 
              ${activeCategory === cat ? "bg-blue-500 text-white" : "bg-gray-800"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* WORD CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories[activeCategory].map((item) => (
          <WordCard key={item.word} word={item.word} image={item.image} />
        ))}
      </div>
    </main>
  );
}
