import React from 'react';
import './PlanCard.css';

function PlanCard(props) {
  
  return (
    <div className='planCard'>
        <h3>{props.solutionName}</h3>
        <img className='cardImage' src={props.image} alt='Supporting Images' />
        <p>{props.description}</p>
    </div>
  )
}

export default PlanCard