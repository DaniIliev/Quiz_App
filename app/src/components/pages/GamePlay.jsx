import { useEffect, useState } from "react";
import Quiz from '../shared/Quiz'
import Timer from "../shared/Timer";
import MoneyList from "../shared/MoneyList";
import * as api from "../../services/getQuestions"
import React from "react";
import { useAuthContext } from "../../context/authContext";

const GamePlay = () => {
const {category} = useAuthContext()
const [round, setRound] = useState('third')
const [questions, setQuestions] = useState([])

  useEffect(() => {
    round == 'first' ? (
      api.getFirstFiveQuestions(category)
      .then(res => console.log(res))

    ): round == 'second' ? (
      api.getSecondFiveQuestions(category)
      .then(res => console.log(res))
    ):(
      api.getLastFiveQuestions(category)
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