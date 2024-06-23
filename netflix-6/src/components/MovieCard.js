

import React from 'react'
import { image_url } from '../utils/constants'




const MovieCard = ({ poster }) => {
    if (!poster) return null;
    return (
      <div className="w-36 pr-4">
        <img alt="Movie Card" src={image_url + poster} />
      </div>
    );
  };
  export default MovieCard;