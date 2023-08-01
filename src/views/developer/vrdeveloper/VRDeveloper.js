import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import XPRVid1 from 'src/assets/videos/XperienceDemo.mp4'
import XPRVid2 from 'src/assets/videos/XperienceVideoPlayer.mp4'
import XPRpic1 from 'src/assets/images/xprpic1.JPG'
import XPRpic2 from 'src/assets/images/xprpic2.JPG'
import XPRpic3 from 'src/assets/images/xprpic3.JPG'
import XPRpic4 from 'src/assets/images/xprpic4.JPG'
import XPRpic5 from 'src/assets/images/xprpic5.JPG'
import XPRpic6 from 'src/assets/images/xprpic6.JPG'
const VRDeveloper = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>XPR Labs - VR Hand tools, 2021-2022</h4>
        </CCardHeader>
        <CCardBody>
          <h4>
            XPR lab&apos;s plaform is called &quot;Xperience&quot;, which is a massive multiplayer
            social vr platform. The Xperience project works on both on PC VR and oculus quest.
            It&apos;s said to be able to hold about 500 people in one room with little to no frame
            drops. This project&apos;s purpose was said to be for hosting VR events, company
            meetings, and conventions.
          </h4>
          <video controls width="100%" height="100%" src={XPRVid1} />
          <ul>
            <li>Designed Nameplates</li>
            <li>Various bug fixing and debugging</li>
            <li>
              Implemented Pickups System: pick up and throwing physics, raycasting on each
              controller, hovering outlines, gravity pull flicking system
            </li>
          </ul>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>XPR Labs - VR Video Player, 2021-2022</h4>
        </CCardHeader>
        <CCardBody>
          <video controls width="100%" height="100%" src={XPRVid2} />
          <ul>
            <li>Various bug fixing and debugging</li>
            <li>
              Designed & Implemented VideoPlayer: Functional Buttons, timestamp, and playing .mp4
              links onto the platform
            </li>
            <li>Implemented Input System on login screen: pressing TAB/Enter goes to next line</li>
          </ul>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>XPR Labs - UI Design Planner, 2021-2022</h4>
        </CCardHeader>
        <CCardBody>
          <img src={XPRpic1} />
          <img src={XPRpic2} />
          <img src={XPRpic3} />
          <img src={XPRpic4} />
          <img src={XPRpic5} />
          <img src={XPRpic6} />
          <ul>
            <li>
              <a href="https://drive.google.com/file/d/1coCDolUXWzn4b4-0cf9Gwe4Vvlt4pZfY/view?usp=sharing">
                Link to UI planner, open with Diagrams.net
              </a>
            </li>
            <li>Designed UI pages/screens based on user&apos;s needs</li>
            <li>Practiced use cases: ex. Not having delete button next to confirm buttons.</li>
            <li>
              Designed with thought in mind of the user having less cursor distance in between
              screen transitions.
            </li>
            <li>
              Laid out priority levels, where the most priority takes the least clicks to get to,
              where the least priority can take more clicks or more time to find it.
            </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default VRDeveloper
