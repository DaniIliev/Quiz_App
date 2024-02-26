import React, { useEffect, useState } from 'react'

const Timer = ({questionNumber, setStop, freezeTime}) => {
  const [timer, setTimer] = useState(30)

  useEffect(() => {
    if(timer === 0) return setStop(true)
    console.log(freezeTime)
    if(freezeTime) return setTimer(state => state)
    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000)

    return () => clearInterval(interval)
  }, [setStop, timer])

  useEffect(() => {
    setTimer(30)
  }, [questionNumber])
  return (
    <div className='timer'>
        {timer}
    </div>
  )
}

export default Timer