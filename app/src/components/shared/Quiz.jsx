import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { moneyListArray } from "./MoneyList";
import useSound from 'use-sound'
import fail from '../../assets/fail.wav'

const Quiz = ({questions, stop, setStop,setProfit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([])
  const [className, setClassName] = useState(null)

  const {questionNumber, setQuestionNumber} = useAuthContext()

  const [wrongAnswer] = useSound(fail) 

  useEffect(() => {
    setAnswers(questions[questionNumber+1]?.incorrect_answers.concat(questions[questionNumber+1]?.correct_answer))
  }, [questions, questionNumber])

  
const delay = (duration, callback) => {
  setTimeout(() => {
    callback()
  }, duration)
}

  const handleClick = (a) => {
    const correctAnswer = a == questions[questionNumber+1]?.correct_answer
    setSelectedAnswer(a)
    setClassName('answer active')

    delay(3000, () => setClassName(correctAnswer ? 'answer correct' : 'answer incorrect'))

    delay(6000, () => {
      if(correctAnswer){
        setProfit(state => state = moneyListArray.filter(e => e.id == 2)[0].amount)
        setQuestionNumber(prev => prev+1)
        setSelectedAnswer(null)
      }else{
        if(questionNumber != 0){
          console.log(moneyListArray)
          setProfit(state => state=`${moneyListArray.filter(e => e.id == 2)[0].amount}`)
        }
        wrongAnswer()
        setStop(true)
      }
    })
  }
    return (
      <div className='quiz'>
          <div className="question">{questions[questionNumber+1]?.question}</div>
          <div className="answers">
            {answers?.map((a) => (
              <div key={a} className={a == selectedAnswer ? className : 'answer'} onClick={() => handleClick(a)}>{a}</div>
            ))}
          </div>
  
      </div>
    )
  }
  export default Quiz