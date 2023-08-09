import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'

import ebay1 from 'src/assets/images/ebay1.jpg'
import ebay2 from 'src/assets/images/ebay2.jpg'
import ebay3 from 'src/assets/images/ebay3.jpg'

const eBay = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Personal Ebay Store - Top Rated Seller, 2023-2024</h4>
        </CCardHeader>
        <CCardBody>
          <img src={ebay1} width="70%"></img>
          <img src={ebay2} width="60%"></img>
          <img src={ebay3} width="40%"></img>
          <ul>
            <li>
              Store Link: <a href="https://www.ebay.com/str/kyokostore">here</a>
            </li>
            <li>
              Am currently an active online seller/merchant with over 1000 positive feedbacks at a
              99.7% rate.
            </li>
            <li>
              All packages shipped via USPS, with a few transactions being in person pick ups.
            </li>
            <li>Handled customer service for refunds, requests, combined shipping.</li>
            <li>
              Has an understanding on the market of supply/demand, hype waves, deadweight,
              collectibles values
            </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default eBay
