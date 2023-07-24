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
          <p>
            My goals varies depending on what I am currently studying wither it be programming or
            animations, or even another language. But at the end of the day my goal would be to work
            on my own project with multiple skill sets where it&apos;s needed.
          </p>

          <p>
            An example is game development that requires other people with different talents to
            pitch in; UI Design, Animations, Art Designs, Game Designs, Programming, Server
            maintenance, etc.
          </p>

          <p>
            My longer term goal would be to eventually start my own company and become well enough
            to start hiring people as well as creating jobs. I like to help others and giving people
            chances especially when they&apos;re struggling looking for Entry jobs right after
            graduating from college.
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
            industry before and it feels exactly where I belong!
          </p>
        </CCardBody>
      </CCard>
    </>
  )
}

export default About
