import React, {ReactNode} from 'react'

import './BasicCard'

interface CardsProps {
  children: ReactNode;
}

export const Cards: React.FC<CardsProps> = ({children}) => {
  return (
    <div className="card-columns">
      {children}
    </div>
  )
}
