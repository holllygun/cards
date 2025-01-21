import React from 'react'
import Button from 'react-bootstrap/Button'

interface CardButtonProps {
    content: string;
    href?: string;
  }
  

  export const CardButton: React.FC<CardButtonProps> = ({content, href = '#'}) => {
    return (
      <Button variant="primary" href={href}>{content}</Button>
    )
  }