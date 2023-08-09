import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'

import amazonwarehouse from 'src/assets/images/amazonwarehouse.jpg'

const AmazonWarehouse = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Amazon Warehouse - Warehouse Associate, 2022</h4>
        </CCardHeader>
        <CCardBody>
          <img src={amazonwarehouse} width="50%"></img>
          <ul>
            <li>
              Equipped finger scanner to scan packages and scanning the destination of placement.
            </li>
            <li>
              Learned how to organize &quot;Tetris&quot; boxes to fit inside of an amazon bag.
            </li>
            <li>
              Learned how to manuever pallet jacks to move pallets/gaylords from one place to
              another
            </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default AmazonWarehouse
