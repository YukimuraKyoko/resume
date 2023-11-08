import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import certificate from 'src/assets/images/Certificate.jpg'
import walgreens from 'src/assets/images/walgreens.jpg'
const About = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>SFSU Pharmacy Technician Certificate, 2023</h4>
        </CCardHeader>
        <CCardBody>
          <img src={certificate} width="60%" alt=""></img>
          <br></br>
          <a
            type="button"
            className="btn btn-lg btn-primary"
            href="https://www.parchment.com/u/award/25a26a51c4dfa524d47b3869f5d80fea"
            d
            target="_blank"
            rel="noreferrer"
          >
            Validation
          </a>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Walgreens Pharmacy Technician, 2023</h4>
        </CCardHeader>
        <CCardBody>
          <img src={walgreens} width="60%" alt=""></img>
          <ul>
            <li>Filled prescriptions</li>
            <li>Deleting prescriptions, and refills</li>
            <li>Restocked medicine in categorized aisles</li>
            <li>Short-hand typed prescriptions on patient profiles</li>
            <li>Organized &quot;ready&quot; prescriptions for pick up</li>
            <li>Sorting out Health Insurance problems</li>
            <li>Transfering prescriptions</li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default About
