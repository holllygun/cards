import React from 'react'

interface CardProps {
    image?: string;
    title: string;
    text: string;
}

export const Card: React.FC<CardProps> = ({image, title, text}) => {
  return (
    <div className="card-columns">
      <div className="card" style={{width: '18rem'}}>
      {image? <img src={image} className="card-img-top" alt="..."/>:null}
      <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  )
}
