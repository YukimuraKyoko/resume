import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import home1 from 'src/assets/images/Home1.jpg'
import home2 from 'src/assets/images/Home2.jpg'
import home3 from 'src/assets/images/Home3.jpg'
import home4 from 'src/assets/images/Home4.jpg'
import home5 from 'src/assets/images/Home5.jpg'

const ThreeDModeling = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>VRChat - Homeworld, 2019</h4>
        </CCardHeader>
        <CCardBody>
          <img src={home1} width="70%" alt=""></img>
          <img src={home2} width="70%" alt=""></img>
          <img src={home3} width="70%" alt=""></img>
          <img src={home4} width="70%" alt=""></img>
          <img src={home5} width="70%" alt=""></img>
          <ul>
            <li>
              Modeled all from scratch, including UV Mapping, cloth simulation & freezing,
              optimizing polys, light baking(In Unity), programming features of what you can do for
              some furniture.
            </li>
            <li>
              Seamless Textures, skybox texture, and some assets like vending machine or video
              player, is not made by me.{' '}
            </li>
            <li>
              World is hosted on VRChat{' '}
              <a href="https://vrchat.com/home/launch?worldId=wrld_9567bf86-d0f7-4946-b620-dc9c853b5f4e">
                here
              </a>
            </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default ThreeDModeling
