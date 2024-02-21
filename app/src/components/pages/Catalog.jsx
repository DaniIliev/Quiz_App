import React from 'react'
import { category } from '../../utils/category';
import GamePlay from './GamePlay';
import { useAuthContext } from '../../context/authContext';
import {Link, useNavigate} from 'react-router-dom'


const Catalog = () => {
  const navigate = useNavigate()
  const {setCategory} = useAuthContext();

  const chooseTopicsHandler = (category) => {
    setCategory(category)
    navigate('/game-play')
  }
  return (

<div className="catalogContent">
    <h1 className='catalogTitle'>Choose one of the following topics</h1>

    <div className='catalog'>
        <div className="thema sport" onClick={() => chooseTopicsHandler(category.Sport)}><img src="/icons/sport.png" alt="sport" width={50} height={50} />Sport</div>
        <div className="thema books" onClick={() => chooseTopicsHandler(category.Books)}><img src="/icons/books.png" alt="books" width={50} height={50}/>Books</div>
        <div className="thema films" onClick={() => chooseTopicsHandler(category.Films)}><img src="/icons/films.png" alt="films" width={50} height={50} />Films</div>
        <div className="thema music" onClick={() => chooseTopicsHandler(category.Music)}><img src="/icons/music.png" alt="music" width={50} height={50} /> Music</div>
        <div className="thema games" onClick={() => chooseTopicsHandler(category['Video Games'])}><img src="/icons/games.png" alt="games" width={50} height={50} />Games</div>
        <div className="thema generalKnowledge" onClick={() => chooseTopicsHandler(category['General Knowledge'])}> <img src="/icons/brain.png" width={50} height={50} alt="brain" />General Knowledge</div>
        <div className="thema geography" onClick={() => chooseTopicsHandler(category.Geography)}><img src="/icons/geography.png" width={50} height={50} alt="geography" />Geography</div>
        <div className="thema history" onClick={() => chooseTopicsHandler(category.History)}><img src="/icons/history.png" alt="history" width={50} height={50} />History</div>
        <div className="thema politics" onClick={() => chooseTopicsHandler(category.Politics)}><img src="/icons/politics.png" width={50} height={50} alt="politics" />Politics</div>
        <div className="thema animals" onClick={() => chooseTopicsHandler(category.Animals)}><img src="/icons/animals.png" alt="animals" width={50} height={50} />Animals</div>
    </div>  
</div>

  )
}

export default Catalog