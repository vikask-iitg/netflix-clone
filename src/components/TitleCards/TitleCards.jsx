import React, { useEffect, useState } from 'react'
import './TitleCards.css'
import { useRef } from "react";
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDQ0ODExYWM2NjhlODg5YTQ2OWUwY2M1NmQ1Y2Y2MyIsIm5iZiI6MTc2ODM2Nzc2My45MzkwMDAxLCJzdWIiOiI2OTY3MjY5MzcwYjZiNzE0NTE4NjYxNDQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Y7Dz7DRNkLZw3qUDl9bY2VXC0M3fxjnO4yTJfQrb2q4'
    }
  };

  const handleWheel = (e) => {
    // Touchpad scroll (has deltaX) → let browser handle it
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      return;
    }

    // Mouse wheel → convert vertical scroll to horizontal
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY * 4;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className="title-cards">
      <h2 className='card-list-heading'>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards
