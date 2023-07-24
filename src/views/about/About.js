import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'

const About = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Who am I?</h4>
        </CCardHeader>
        <CCardBody>
          <p>type here</p>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Goals</h4>
        </CCardHeader>
        <CCardBody>
          <p>type here</p>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Hobbies</h4>
        </CCardHeader>
        <CCardBody>
          <p>type here</p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default About
