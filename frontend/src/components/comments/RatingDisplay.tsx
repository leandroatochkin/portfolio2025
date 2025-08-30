import React from 'react'
import { Star, StarHalf } from 'lucide-react';

interface RatingDisplayProps {
    rating?: number;
}

const RatingDisplay: React.FC<RatingDisplayProps> = ({ rating }) => {

const calculateStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} className="text-yellow-500" />);
    }
    if (halfStar) {
        stars.push(<StarHalf key="half" className="text-yellow-500" />);
    }
    
    return stars;
}


  return (
    <div
    style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
    >
        {rating ? calculateStars(rating) : 'No rating'}
        <p
        style={{ margin: 0, fontSize: '20px', color: '#555', fontWeight: 'bold' }}
        >{String(rating)}</p>
    </div>
  )
}

export default RatingDisplay