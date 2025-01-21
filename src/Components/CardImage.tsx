import React from 'react'
import { Card } from 'react-bootstrap';

interface CardImageProps {
    img: string;
    alt: string;
}

export const CardImage: React.FC<CardImageProps> = ({ img, alt }) => {
  return (
    <div>
         <Card.Img variant="top" src={img} alt={alt} />
    </div>
  )
}
