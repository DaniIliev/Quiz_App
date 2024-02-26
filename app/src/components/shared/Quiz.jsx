import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/authContext";
import { moneyListArray } from "./MoneyList";
import useSound from 'use-sound'
import correct from '../../assets/correct.wav'
import fail from '../../assets/fail.wav'

const Quiz = ({questions, setStop,setProfit, setFreezeTime}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([])
  const [className, setClassName] = useState(null)

  const {questionNumber, setQuestionNumber} = useAuthContext()

  const [wrongAnswer] = useSound(fail) 
  const [Anscorrect] = useSound(correct) 


  useEffect(() => {
    setAnswers(questions[questionNumber+1]?.incorrect_answers.concat(questions[questionNumber+1]?.correct_answer))
  }, [questions, questionNumber])

  
const delay = (duration, callback) => {
  setTimeout(() => {
    callback()
  }, duration)
}

  const handleClick = (a) => {
    setFreezeTime(true)
    const correctAnswer = a == questions[questionNumber+1]?.correct_answer
    setSelectedAnswer(a)
    setClassName('answer active')

    delay(3000, () => setClassName(correctAnswer ? 'answer correct' : 'answer incorrect'))

    delay(5000, () => {
      if(correctAnswer){
        Anscorrect()
        delay(1000, () => {
          setProfit(state => state = moneyListArray.filter(e => e.id == 2)[0].amount)
          setQuestionNumber(prev => prev+1)
          setSelectedAnswer(null)
        })
      }else{
        if(questionNumber != 0){
          setProfit(state => state=`${moneyListArray.filter(e => e.id == 2)[0].amount}`)
        }
        wrongAnswer()
        delay(2000, () => {
          setStop(true)
        })
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