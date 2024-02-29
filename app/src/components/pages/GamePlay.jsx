import { useEffect, useState } from "react";
import Quiz from "../shared/Quiz";
import Timer from "../shared/Timer";
import MoneyList from "../shared/MoneyList";
import * as api from "../../services/getQuestions";
import {Button} from 'react-bootstrap'
import { useAuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const GamePlay = () => {
  const { category, questionNumber } = useAuthContext();

  const [freezeTime, setFreezeTime] = useState(false) 
  const [newGame, setNewGame] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [stop, setStop] = useState(false);
  const [profit, setProfit] = useState('$0')

  useEffect(() => {
    api.getQuestions(category).then((res) => setQuestions(res))
  }, [newGame]);

  return (
    <>
      <div className="main">
        {stop === true ? (
          <div className="losing">
              <h1 className="stopGameH1">You lost. Your profit is {profit}</h1>
              <div className="buttons">
                  <Button as={Link} to={'/catalog'} className="btn">Catalog</Button>
                  <Button className="btn" onClick={() => {
                    setNewGame(true)
                    setStop(false)
                  }}>New game</Button>
              </div>
          </div>
            
        ) : (
          <>
            <div className="top">
              <Timer questionNumber={questionNumber} setStop={setStop} freezeTime={freezeTime}/>
            </div>
            <div className="bottom">
              <Quiz questions={questions} stop={stop} setStop={setStop} profit={profit} setProfit={setProfit} setFreezeTime={setFreezeTime}/>
            </div>
          </>
        )}
      </div>

      <div className="pyramide">
        <MoneyList />
      </div>
    </>
  );
};

export default GamePlay;
