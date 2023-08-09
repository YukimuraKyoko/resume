import React from 'react'

import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import drawing1 from 'src/assets/images/drawing1.jpg'
import drawing2 from 'src/assets/images/drawing2.jpg'
import drawing3 from 'src/assets/images/drawing3.jpg'
import drawing4 from 'src/assets/images/drawing4.jpg'
import drawing5 from 'src/assets/images/drawing5.jpg'

const OtherArtWorks = () => {
  return (
    <>
      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <h4>Fist Sketch, 2014</h4>
            </CCardHeader>
            <CCardBody>
              <img src={drawing1} width="50%"></img>
              <ul>
                <li>Understanding of hand ananomy</li>
                <li>Understanding of shading</li>
                <li>Understanding of skin wrinkles</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <h4>Butterfly Knife Sketch, 2014</h4>
            </CCardHeader>
            <CCardBody>
              <img src={drawing2} width="63%"></img>
              <ul>
                <li>Understanding of 1 point perspective</li>
                <li>Understanding of metallic shading or light reflections</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <h4>Old House Sketch, 2014</h4>
            </CCardHeader>
            <CCardBody>
              <img src={drawing3} width="84%"></img>
              <ul>
                <li>My old house that I grew up in from 1998 to 2012</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <h4>Magazine/Fashion Sketch, 2014</h4>
            </CCardHeader>
            <CCardBody>
              <img src={drawing4} width="50%"></img>
            </CCardBody>
            <ul>
              <li>Understanding of sketching by quadrants</li>
            </ul>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <h4>Key Sketch, 2015</h4>
            </CCardHeader>
            <CCardBody>
              <img src={drawing5} width="50%"></img>
              <ul>
                <li>Casual speed sketching, this one took a total of 14 minutes</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default OtherArtWorks
