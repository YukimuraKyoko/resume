import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import truepill from 'src/assets/images/truepill.jpg'
const TruepillWarehouse = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Truepill - Warehouse Associate, 2021</h4>
        </CCardHeader>
        <CCardBody>
          <img src={truepill} width="70%" alt=""></img>
          <ul>
            <li>
              Website Link: <a href="https://truepill.com/"> Here</a>
            </li>
            <li>Scanned prescription medication per patient profile</li>
            <li>
              Packaged prescription medication at a work station, about 70-100 packages per hour
            </li>
            <li>
              Worked alongside Pharmacists aiding with disposing broken pills, and also
              encapsulating new pills
            </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default TruepillWarehouse
