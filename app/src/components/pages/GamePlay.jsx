import { useEffect, useState } from "react";
import Quiz from '../shared/Quiz'
import Timer from "../shared/Timer";
import MoneyList from "../shared/MoneyList";
import * as api from "../../services/getQuestions"
import React from "react";
import { useAuthContext } from "../../context/authContext";

const GamePlay = () => {
const {category, questionNumber, setQuestionNumber} = useAuthContext()

const [round, setRound] = useState('first')
const [questions, setQuestions] = useState([])
const [stop, setStop] = useState(false)


  useEffect(() => {
    round == 'first' ? (
      api.getFirstFiveQuestions(category)
      .then(res => setQuestions(res))

    ): round == 'second' ? (
      api.getSecondFiveQuestions(category)
      .then(res => setQuestions(res))
    ):(
      api.getLastFiveQuestions(category)
      .then(res => setQuestions(res))
    )
  },[round])
  return (
    <>
      <div className="main">
        <div className="top">
          <Timer questionNumber={questionNumber} setStop={setStop}/>
        </div>
        <div className="bottom">
          <Quiz questions={questions}/>
        </div>
      </div>
      <div className="pyramide">
        <MoneyList />
      </div>
    </>
  );
};

export default GamePlay;