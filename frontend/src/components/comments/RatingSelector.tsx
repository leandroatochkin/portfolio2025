import React from 'react'
import StarFilled from '../../icons/StarFilled'
import { Star } from 'lucide-react'

interface RatingSelectorProps {
   setValue?: (value: number) => void;
}

const RatingSelector: React.FC<RatingSelectorProps> = ({ setValue }) => {
const stars = [1, 2, 3, 4, 5];    
const [selectedStars, setSelectedStars] = React.useState(0);
  return (
    <div>
        {stars.map((star) => (
            <span 
            key={star}
            onClick={() => {
                setSelectedStars(star)
                if(setValue) setValue(star)
            }}
            style={{ cursor: 'pointer', marginRight: '4px' }}
            >
                {star <= selectedStars ? <StarFilled /> : <Star/>}
            </span>
        ))}
    </div>
  )
}

export default RatingSelector