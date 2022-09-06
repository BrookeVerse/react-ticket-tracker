import React from 'react'
import "./TrackerCard.scss"
import CounterContainer from '../CounterContainer/CounterContainer'

const TrackerCard = () => {
  return (
    <div className='trackerCard'>
        <h2>Name Role</h2>
        <CounterContainer />
    </div>
  )
}

export default TrackerCard