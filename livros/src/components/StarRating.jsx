import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length) => [...Array(length)];
const Star = ({ selected = false, onSelect = (f) => f }) => ( 
    <FaStar color={selected ? '#ffc107' : '#b9bbc6'} onClick={onSelect} /> 
);

const StarRating = ({ totalStars = 5 }) => {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
    <div className="star">{createArray(totalStars).map((n, i) => (
        <Star 
            key={i} 
            selected={selectedStars > i} 
            onSelect={() => setSelectedStars(i + 1)} 
        /> 
    ))}

    <p>{selectedStars} de {totalStars} estrelas</p>
    </div>
   );
};

export default StarRating