import React, { ReactNode } from 'react'
import { Card } from 'react-bootstrap';

import { CardButton } from './CardButton';
import { CardImage } from './CardImage';

interface BasicCardProps {
  imageSrc?: string; 
  imageAlt?: string; 
  title: string;    
  text: string;    
  buttonText?: string;
  buttonHref?: string; 
}


export const BasicCard: React.FC<BasicCardProps> = ({imageSrc, imageAlt='card image', title, text, buttonText, buttonHref}) => {
  return (
    <Card style={{ width: '18rem' }}>
    {imageSrc && <CardImage img = {imageSrc} alt ={imageAlt}/>}
    <Card.Body>
      <Card.Title> {title} </Card.Title>
      <Card.Text>
        {text}
      </Card.Text>
      {buttonText && <CardButton content={buttonText} href={buttonHref}/>}
    </Card.Body>
  </Card>
  )
}
