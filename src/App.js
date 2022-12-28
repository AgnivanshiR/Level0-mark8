import React from "react";
import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "🎄": "Christmas Tree",
  "🫶": "Heart Hands",
  "❤️": "Red Heart",
  "🎅": "Santa Claus",
  "😊": "Smiling Face with Smiling Eyes",
  "✨": "Sparkles",
  "🎁": "Wrapped Gift",
  "🎉": "Party Popper",
  "🥹": "Face Holding Back Tears",
  "🔥": "Fire",
  "❄️": "Snowflake",
  "😂": "Face with Tears of Joy",
  "🫠": "Melting Face",
  "💀": "Skull",
  "🫡": "Saluting Face",
  "👍": "Thumbs Up",
  "⭐": "Star",
  "✔️": "Check Mark",
  "✅": "Check Mark Button",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "👉": "Backhand Index Pointing Right",
  "😉": "Winking Face",
  "🥳": "Partying Face",
  "🌟": "Glowing Star",
  "😭": "Loudly Crying Face",
  "👀": "Eyes",
  "🫶": "🏻 Heart Hands: Light Skin Tone",
  "👇": "Backhand Index Pointing Down",
  "🤩": "Star-Struck"
};

var emojisWeKnow = Object.keys(emojiDictionary);

import app from "./App";
export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeHandler() {
    var userInput = event.target.value;
    meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We do not have this in our Database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>emoji Interpreter</h1>
      <input onChange={onChangeHandler} placeholder="check your emoji"></input>
      <div> {meaning}</div>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
