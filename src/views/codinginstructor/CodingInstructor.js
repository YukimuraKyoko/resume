import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import mvcodepic from 'src/assets/images/mvcode-1.jpg'
import cwupic from 'src/assets/images/codewithus-1.jpg'

const CodingInstructor = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>MVCode - Coding Instructor, 2017-2020</h4>
        </CCardHeader>
        <CCardBody>
          <img
            src={mvcodepic}
            title="I'm in the picture, tall girl on the right with my hand my waist"
            alt=""
          ></img>
          <h5>
            MVCode is an educational company that hires individuals with programming knowledge, to
            teach kids how to create games in JS, HTML5, Unity3D, and robotics(Arduino).
          </h5>
          <ul>
            <li>I&apos;ve taught kids how to program in JS, HTML5, and Unity3D</li>
            <li>
              For HTML5 or JS, we use <a href="https://p5js.org/">P5.js</a>, which is drawing on the
              webpage using shapes or images.
            </li>
            <li>
              For Unity3D, I&apos;ve used many Tutorials: FPS, Roll a Ball, 3rd person character
              game, 2D sprite games.
            </li>
          </ul>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>
            <a href="https://codewithus.com/">CodeWithUs</a> - Online Coding Instructor, 2020-2022
          </h4>
        </CCardHeader>
        <CCardBody>
          <img
            src={cwupic}
            width="70%"
            title="I'm in the picture, tall girl on the right with my hand my waist"
            alt=""
          ></img>
          <h5>
            CodeWithUs is MVCode(entry above), which has been migrated over to CodeWithUs during the
            Covid 2020 pandemic and all classes were moved to Online Zoom courses.
          </h5>
          <ul>
            <li>Held class meetings on Zoom</li>
            <li>
              Addressed student&apos;s problems and email teachers a student&apos;s progress and
              areas for improvement.
            </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CodingInstructor
