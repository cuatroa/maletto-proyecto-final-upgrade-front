import React, { useState } from 'react'
import './StarRating.scss'

export default function StarRating() {

    const [rating, setRating] = useState();

    return (
        <div>
            {[...Array(5)].map((star, i) => {

                const ratingValue = i + 1;

                return (
                        <label>
                        <input 
                        className="input-star"
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)} 
                        />
                        <span className="icon-star-full star" color={ratingValue <= rating ? "#f8e71c" : "#e4e5e9"}></span>

                        </label>
                );
            })}
            
        </div>
    )
}
