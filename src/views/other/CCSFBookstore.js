import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import ccsfbookstore from 'src/assets/images/ccsfbookstore.jpg'

const CCSFBookstore = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>CCSF Bookstore - Retail Associate, 2015</h4>
        </CCardHeader>
        <CCardBody>
          <img src={ccsfbookstore} width="50%"></img>
          <ul>
            <li>Helped customers find what they are looking for, or giving advice</li>
            <li>Used a dolly to carry over 50lb of textbooks to restock. </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CCSFBookstore
