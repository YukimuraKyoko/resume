import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import hlslvid from 'src/assets/videos/ShaderSphereDemo.mp4'
import jlptworldvid from 'src/assets/videos/JLPTStudyHall.mp4'
import shaderspherepic from 'src/assets/images/ShaderSphereExplanation.jpg'
import nihongoboardvid from 'src/assets/videos/Nihongoboard.mp4'

const OtherProjects = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>VRChat - Nihongo Board - VR Mobile/UI Japanese learning application</h4>
        </CCardHeader>
        <CCardBody>
          <video controls width="100%" height="100%" src={nihongoboardvid} />
          <ul>
            <li>
              Created a VR-mobile-like application for learning Japanese on a VR multiplayer
              platform
            </li>
            <li>
              Experimented with network code for the first time, currently some pages are bugged and
              not synced with other clients.
            </li>
            <li>Data was organized in all arrays of objects</li>
          </ul>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>VRChat - Japanese Study Hall - VR Japanese learning world</h4>
        </CCardHeader>
        <CCardBody>
          <video controls width="100%" height="100%" src={jlptworldvid} />
          <ul>
            <li>
              Game world hosted in VRChat for others to come learn:
              <a href="https://vrchat.com/home/launch?worldId=wrld_f5e85e36-66fd-444f-8b54-32dd91378a21">
                World Link
              </a>
            </li>
            <li>Data was organized in all arrays of objects</li>
            <li>All the lighting and 3D modeling, and UI design was made by me</li>
          </ul>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Unity HLSL - Shader Sphere</h4>
        </CCardHeader>
        <CCardBody>
          <video controls width="100%" height="100%" src={hlslvid} />
          <img src={shaderspherepic} width={'50%'}></img>
          <ul>
            <li>Learned how to program in HLSL, a graphics programming langauge.</li>
            <li>Knowledge of 3D pixel matrices</li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default OtherProjects
