import React from 'react'
import "./TrackerContainer.scss"
import TrackerCard from '../TrackerCard/TrackerCard'
import employees from "../../assets/data/employee"

const TrackerContainer = () => {
  const employeeCards = employees.map((employee)=> {
    return(
      <TrackerCard name={employee.name} role={employee.role} />
    )
  })
  return (
    <div className='tracker'>
        {employeeCards}
    </div>
  )
}

export default TrackerContainer