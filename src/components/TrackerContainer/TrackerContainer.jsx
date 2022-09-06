import React from 'react'
import "./TrackerContainer.scss"
import TrackerCard from '../TrackerCard/TrackerCard'
import employee from "../../assets/data/employee"

const TrackerContainer = () => {

  return (
    <div className='tackerContainer'>
        <TrackerCard name={employee[0].name} role={employee[0].role}/>
    </div>
  )
}

export default TrackerContainer