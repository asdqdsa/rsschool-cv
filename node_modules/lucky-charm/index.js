#!/usr/bin/env node
const luckMessages = [
  "your luck has increased! ✨",
  "fortune smiles upon you today! 🍀",
  "you've unlocked a +1 luck buff! 🎲",
  "your luck just leveled up! 💫",
  "your luck is off the charts! 🌟",
  "luck buff: ✨ your luck has increased! +1"
];

const randomMessage = luckMessages[Math.floor(Math.random() * luckMessages.length)];
console.log("\x1b[35m%s\x1b[0m", randomMessage);