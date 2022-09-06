import React from 'react'
import "./CounterContainer.scss"
import Counter from '../Counter/Counter'

const CounterContainer = () => {
  return (
    <div className='counterContainer'>
        <h2 className='counterContainer__heading'>Counter</h2>
        <Counter />
    </div>
  )
}

export default CounterContainer