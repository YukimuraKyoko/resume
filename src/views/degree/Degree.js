import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import { Image } from 'react-native'
import cerf from 'src/assets/images/Degree.jpg'

const Degree = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>San Francisco State University Bachelors Degree, 2019</h4>
        </CCardHeader>
        <CCardBody>
          <img src={cerf} align="bottom" width={'50%'} height={'50%'} alt="" />
          <div>
            <Image img src={cerf} alt="cerf" class="center"></Image>
            <br></br>
            <a
              type="button"
              className="btn btn-lg btn-primary"
              href="https://www.parchment.com/u/award/9e22d53c0c0aa466139ae6e0dfe7dc5a"
              d
              target="_blank"
              rel="noreferrer"
            >
              Validation
            </a>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Degree
