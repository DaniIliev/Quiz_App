import React from 'react'
import { category } from '../../utils/category';
import GamePlay from './GamePlay';


const Catalog = () => {
    // const [category, setCategory] = useState()

    const chooseTopicHandler = () => {
        console.log(category)
    }
  return (

<div className="catalogContent">
    <h1 className='catalogTitle'>Choose one of the following topics</h1>

    <div className='catalog'>
        <div className="thema sport" > <img src="/icons/sport.png" alt="sport" width={50} height={50} />Sport</div>
        <div className="thema books"> <img src="/icons/books.png" alt="books" width={50} height={50}/>Books</div>
        <div className="thema films"> <img src="/icons/films.png" alt="films" width={50} height={50} />Films</div>
        <div className="thema music"><img src="/icons/music.png" alt="music" width={50} height={50} /> Music</div>
        <div className="thema games"> <img src="/icons/games.png" alt="games" width={50} height={50} />Games</div>
        <div className="thema generalKnowledge"> <img src="/icons/brain.png" width={50} height={50} alt="brain" />General Knowledge</div>
        <div className="thema geography"> <img src="/icons/geography.png" width={50} height={50} alt="geography" />Geography</div>
        <div className="thema history"> <img src="/icons/history.png" alt="history" width={50} height={50} />History</div>
        <div className="thema politics"> <img src="/icons/politics.png" width={50} height={50} alt="politics" />Politics</div>
        <div className="thema animals"> <img src="/icons/animals.png" alt="animals" width={50} height={50} />Animals</div>
    </div>
    {/* {category != 0 ? <GamePlay category={category}/> : ''} */}
</div>

  )
}

export default Catalog