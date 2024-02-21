import { useEffect, useState } from "react";
import Timer from "../shared/Timer";
import Quiz from "../shared/Quiz";
import MoneyList from "../shared/MoneyList";
import * as api from "../../services/getQuestions"
import React from "react";

const GamePlay = (category) => {
  console.log(category)
const [round, setRound] = useState('third')
const [questions, setQuestions] = useState([])
  useEffect(() => {
    round == 'first' ? (
      api.getFirstFiveQuestions(category.Sport)
      .then(res => console.log(res))

    ): round == 'second' ? (
      api.getSecondFiveQuestions(category.Sport)
      .then(res => console.log(res))
    ):(
      api.getLastFiveQuestions(category.Sport)
      .then(res => console.log(res))
    )
  },[round])
  return (
    <>
      <div className="main">
        <div className="top">
          <Timer />
        </div>
        <div className="bottom">
          <Quiz />
        </div>
      </div>
      <div className="pyramide">
        <MoneyList />
      </div>
    </>
  );
};

export default GamePlay;