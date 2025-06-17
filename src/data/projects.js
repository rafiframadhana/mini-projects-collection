// Frontend Thumbnails
import assemblyEndgame from "./../assets/images/assembly-endgame.png";
import calculator from "./../assets/images/calculator.png";
import diceRoller from "./../assets/images/dice-roller.png";
import numberGuessing from "./../assets/images/number-guessing.png";
import passwordGenerator from "./../assets/images/password-generator.png";
import rockPaperScissors from "./../assets/images/rock-paper-scissors.png";
import stopwatch from "./../assets/images/stopwatch.png";
import temperatureConversion from "./../assets/images/temperature-conversion.png";
import tenzies from "./../assets/images/tenzies.png";
import todoList from "./../assets/images/todo-list.png";
import travelJournal from "./../assets/images/travel-journal.png";
import weatherApp from "./../assets/images/weather-app.png";
import youtubeClone from "./../assets/images/youtube-clone.png";
// import amazonClone from "./../assets/images/amazon-clone.png";
// import braySurfing from "./../assets/images/bray-surfing.png";
// import recipebotAi from "./../assets/images/recipebot-ai.png";
// import portfolioWeb from "./../assets/images/web-portfolio.png";

//ICONS

import css from "./../assets/icon/css.png";
import html from "./../assets/icon/html.png";
import js from "./../assets/icon/js.png";
import react from "./../assets/icon/react.png";
import openWeather from "./../assets/icon/openweather.png";
import vite from "./../assets/icon/vite.png";
// import mysql from "./../assets/images/icon/mysql.png";
// import chakraUi from "./../assets/images/icon/chakra-ui.png";
// import reduxToolkit from "./../assets/images/icon/redux-toolkit.png";
// import zustand from "./../assets/images/icon/zustand.png";
// import hfLogo from "./../assets/images/icon/hf-logo.png";
// import framerMotion from "./../assets/images/icon/framer-motion.png";
// import nodejs from "./../assets/images/icon/nodejs.png";
// import express from "./../assets/images/icon/express.png";
// import authjs from "./../assets/images/icon/auth-js.png";
// import sanity from "./../assets/images/icon/sanity.png";
// import geminiAI from "./../assets/images/icon/gemini.png";
// import typescript from "./../assets/images/icon/typescript.png";
// import mongoDb from "./../assets/images/icon/mongo-db.png";
// import tailwindCss from "./../assets/images/icon/tailwind-css.png";
// import vercel from "./../assets/images/icon/vercel.png";
// import nextjs from "./../assets/images/icon/nextjs.png";
// import jasmine from "./../assets/images/icon/jasmine.png";
// import materialUi from "./../assets/images/icon/material-ui.png";
// import netlify from "./../assets/images/icon/netlify.png";
// import reactRouter from "./../assets/images/icon/react-router.png";



export const projects = [
  {
    img: weatherApp,
    title: "Weather App",
    description:
      "A weather web application that allows users to check the current weather by searching for a specific city.",
    link: "https://rafiframadhana.github.io/Weather-App/",
    github: "https://github.com/rafiframadhana/Weather-App",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "Open Weather", icon: openWeather },

    ],
  },
  {
    img: travelJournal,
    title: "Travel Journal",
    description:
      "A digital travel journal where users can document their trips, upload photos, and share experiences.",
    link: "https://rafiframadhana.github.io/travel-journal/",
    github: "https://github.com/rafiframadhana/travel-journal",
    techStack: [
      { name: "React", icon: react },
      { name: "Javascript", icon: js },
      { name: "CSS", icon: css },
      { name: "Vite", icon: vite },
    ],
  },
  {
    img: youtubeClone,
    title: "Youtube Clone",
    description:
      "A simple YouTube clone, featuring a basic layout with video thumbnails, and titles.",
    link: "https://rafiframadhana.github.io/youtube-clone/",
    github: "https://github.com/rafiframadhana/youtube-clone",
    techStack: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: assemblyEndgame,
    title: "Word Guessing Game",
    description:
      "A word-guessing game where players attempt to guess the hidden word within a limited number of tries.",
    link: "https://rafiframadhana.github.io/assembly-endgame/",
    github: "https://github.com/rafiframadhana/assembly-endgame",
    techStack: [
      { name: "React", icon: react },
      { name: "Javascript", icon: js },
      { name: "CSS", icon: css },
      { name: "Vite", icon: vite },
    ],
  },
  {
    img: tenzies,
    title: "Tenzies",
    description:
      "A fun and interactive dice-rolling game where players try to get all dice to show the same number.",
    link: "https://rafiframadhana.github.io/tenzies-game/",
    github: "https://github.com/rafiframadhana/tenzies-game",
    techStack: [
      { name: "React", icon: react },
      { name: "Javascript", icon: js },
      { name: "CSS", icon: css },
      { name: "Vite", icon: vite },
    ],
  },
  {
    img: calculator,
    title: "Calculator",
    description:
      "A simple calculator that supports basic arithmetic operations.",
    link: "https://rafiframadhana.github.io/Calculator/",
    github: "https://github.com/rafiframadhana/Calculator",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: todoList,
    title: "To do List",
    description:
      "A to-do list application that allows users to add, edit, and delete tasks.",
    link: "https://rafiframadhana.github.io/To-do-List/",
    github: "https://github.com/rafiframadhana/To-do-List",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: rockPaperScissors,
    title: "Rock Paper Scissors",
    description:
      "A classic Rock, Paper, Scissors game where users can play against the computer.",
    link: "https://rafiframadhana.github.io/Rock-Paper-Scissors-Game/",
    github: "https://github.com/rafiframadhana/Rock-Paper-Scissors-Game",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: passwordGenerator,
    title: "Password Generator",
    description:
      "Generates customizable random passwords with options for length and character types.",
    link: "https://rafiframadhana.github.io/Password-Generator/",
    github: "https://github.com/rafiframadhana/Password-Generator",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: temperatureConversion,
    title: "Temperature Conversion",
    description:
      "Converts temperatures between Celsius, Fahrenheit, and Kelvin.",
    link: "https://rafiframadhana.github.io/Temperature-conversion/",
    github: "https://github.com/rafiframadhana/Temperature-conversion",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: diceRoller,
    title: "Dice Roller Game",
    description:
      "Simulates rolling one or more dice and displays the results visually.",
    link: "https://rafiframadhana.github.io/Dice-Roller-Game/",
    github: "https://github.com/rafiframadhana/Dice-Roller-Game",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: stopwatch,
    title: "Stopwatch",
    description:
      "A minimalist stopwatch with start, stop, and reset functions, with a modern UI.",
    link: "https://rafiframadhana.github.io/Stopwatch/",
    github: "https://github.com/rafiframadhana/Stopwatch",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
  {
    img: numberGuessing,
    title: "Number Guessing Game",
    description:
      "A game where the player guesses a randomly generated number.",
    link: "https://rafiframadhana.github.io/Number-Guessing-Game/",
    github: "https://github.com/rafiframadhana/Number-Guessing-Game",
    techStack: [
      { name: "Javascript", icon: js },
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
    ],
  },
];
