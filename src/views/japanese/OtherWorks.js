import React from 'react'
import proposal from 'src/assets/JPGameProposal.pdf'
import watashi1 from 'src/assets/images/Watashi1.jpg'
import watashi2 from 'src/assets/images/Watashi2.jpg'

import { CCard, CCardBody, CCardHeader, CCol, CFormControlWrapper, CRow } from '@coreui/react'

const OtherWorks = () => {
  return (
    <>
      <CRow>
        <CCard className="mb-4">
          <CCardHeader>
            <h4>Work/Partnership Business Proposal (Formal)</h4>
          </CCardHeader>
          <CCardBody>
            <div className='flex-grow-2"'>
              <iframe src={proposal} width="100%" height="100%"></iframe>
            </div>
            <ul>
              <li>
                A formal typed letter to any Japanese artist that wants to partner up with me to
                create a game.
              </li>
              <li>Can create formal Japanese letters using Keigo (Honorifics)</li>
            </ul>
          </CCardBody>
        </CCard>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <h4>Handwritten Essay about me (1)</h4>
            </CCardHeader>
            <CCardBody>
              <img src={watashi1} width="70%"></img>
              <ul>
                <li>Summary: Talking about my life, what I do on a daily basis</li>
                <li>Understands how to write kanji</li>
                <li>Understands how to write/read vertical</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>
              <h4>Handwritten Essay about me (2)</h4>
            </CCardHeader>
            <CCardBody>
              <img src={watashi2} width="70%"></img>
              <ul>
                <li>Summary: Talking about what I do, my hobbies, etc</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default OtherWorks
