import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import MelodyVid from 'src/assets/videos/MelodyAnimationManager.mp4'
const UnityEditorDeveloper = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Projekt Melody - Unity Editor Developer</h4>
        </CCardHeader>
        <CCardBody>
          <video controls width="100%" height="100%" src={MelodyVid} />
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Projekt_Melody">
                Projekt Melody Wiki page here
              </a>
            </li>
            <li>
              Learned Unity Editor scripting for creating an animator adjusting tool for a vtuber
              stream.
            </li>
            <li>
              A keyboard mapping tool to toggle or switch out an avatar&apos;s outfits, accessories,
              etc.
            </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default UnityEditorDeveloper
