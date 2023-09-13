import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import autofreak from 'src/assets/images/autofreak.jpg'

const JapanTownRetail = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Auto Freak - Retail Associate, 2015-2017</h4>
        </CCardHeader>
        <CCardBody>
          <img src={autofreak} width="40%" alt=""></img>
          <ul>
            <li>
              Auto Freak is now permanently closed since 2017, it used to be located in Japan Town,
              San Francisco, CA
            </li>
            <li>
              Helping customers find what they need, or give them advice on how to use car
              accessories
            </li>
            <li>Worked the cashier, handled money, reminded customer about rewards program.</li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default JapanTownRetail
