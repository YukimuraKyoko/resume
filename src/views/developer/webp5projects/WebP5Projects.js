import React from 'react'
import Sketch from 'react-p5'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'

const WebP5Projects = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Platformer, 2018</h4>
        </CCardHeader>
        <CCardBody>
          <div className="p5js">
            <iframe
              src="https://yukimurakyoko.github.io/portfolio/p5/platformer.html"
              scrolling="no"
              width="1000px"
              height="720px"
            ></iframe>
          </div>
          <ul>
            <li>
              A project I&apos;ve created on my own during my time working at
              <a href="https://codewithus.com/" target="_blank" rel="noreferrer">
                {' '}
                MVCode/CodeWithUs
              </a>
              .<i>May need to click on game to enable controls.</i>
            </li>
            <li>
              <a href="https://p5js.org/">P5js.org</a>
            </li>
            <li>
              Loaded sprite images cycling on repeat in a loop and enabling/toggling them for each
              movement button press.
            </li>
            <li>Was working on gravity formulas, currently have a bug working with platforms.</li>
            <li>
              Side scrolling background happens when player is at a certain x value on the screen
              and it progresses repeats of the background in that direction.
            </li>
          </ul>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Flappy Circle, 2018</h4>
        </CCardHeader>
        <CCardBody>
          <div className="p5js">
            <iframe
              src="https://yukimurakyoko.github.io/portfolio/p5/flappycircle.html"
              scrolling="no"
              width="850px"
              height="500px"
            ></iframe>
          </div>
          <ul>
            <li>
              A project I&apos;ve created on my own during my time working at
              <a href=""> MVCode/CodeWithUs</a>.{' '}
              <i>May need to click on game to enable controls.</i>
            </li>
            <li>
              <a href="https://p5js.org/">P5js.org</a>
            </li>
            <li>Hold click to ascend and let go to decend.</li>
            <li>
              Originally you lose in this game by touching any of the bottom/top surfaces, but
              I&apos;ve added HP to prolong the game further
            </li>
            <li>
              The orbiting circles I&apos;ve added for fun when I was learning how to rotate objects
              in P5.js
            </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default WebP5Projects
