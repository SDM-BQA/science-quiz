import { useState } from "react";
import QustionCanvas from "./components/QuestionCanvas/QustionCanvas";

const App = () => {
   // Topics name
   const topics = [
    "General Science Knowledge",
    "Famous Scientists and Inventions",
    "Climate Change",
    "Nature and Environment",
    "Fun Facts and Trivia",
    "Current Events and Recent Discoveries",
  ];
  
  // State for random number
  const [randomNumber, setRandomNumber] = useState(0);

  // State for previously generated number
  const [prevRandomNumber, setPrevRandomNumber] = useState();

  // Function to generate a random number
  const generateRandomNumber = () => {
    const min = 0;
    const max = topics.length - 1;
    let newRandomNum;
    do {
      newRandomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (newRandomNum === prevRandomNumber); // Regenerate if the new number is the same as the previous one
    setRandomNumber(newRandomNum);
    setPrevRandomNumber(newRandomNum);
  };

  // State for topic name
  const [topicName, setTopicName] = useState(topics[0]);

  // console.log(generateRandomNumber());
  // Function to set topic name randomly
  const setRandomTopicName = () => {
    generateRandomNumber();
    if (randomNumber !== undefined) {
      setTopicName(topics[randomNumber]);
    }
  };

  return (
    <>
      <QustionCanvas topicName={topicName} />
      <button onClick={setRandomTopicName}>Generate Random Question</button>
    </>
  );
};

export default App;
