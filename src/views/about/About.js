import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'

const About = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Who am I?</h4>
        </CCardHeader>
        <CCardBody>
          <p>
            I was born and raised in California, USA. I&apos;ve attended many colleges and
            eventually graduated with a bachelors in Computer Science with a Japanese Minor. I
            consider myself as a Polymath or a Multipotentialite, which is a person with many
            talents.
          </p>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Goals</h4>
        </CCardHeader>
        <CCardBody>
          <p>My goal is to help others and starting my own game or animation company.</p>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Areas of Improvement</h4>
        </CCardHeader>
        <CCardBody>
          <p>
            Even though I have a lot of skills, I&apos;m endlessly curious about how to put them
            altogether to create something to show the world.
          </p>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Hobbies</h4>
        </CCardHeader>
        <CCardBody>
          <p>
            In my free time I&apos;m either playing steam games with friends, voice chatting on
            discord with friends, watching youtube videos, or if I&apos;m feeling productive;
            I&apos;d want to learn new things and study from doing tutorials or taking online
            courses.
          </p>
          <p>
            I&apos;m also a huge Anime fan! I&apos;ve been liking both Japanese Culture and Anime
            since I was around 8 years old til now, I&apos;ve already partially worked in the anime
            industry and it was a great experience!
          </p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default About
