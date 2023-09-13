import React from 'react'

import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import vrnihongo from 'src/assets/images/vrnihongo.jpg'
import vrnihongo1 from 'src/assets/images/vrnihongo1.jpg'
import vrnihongo2 from 'src/assets/images/vrnihongo2.jpg'

const VRNihongo = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>VRNihongo - Moe Sensei, 2019</h4>
        </CCardHeader>
        <CCardBody>
          <img src={vrnihongo} width="70%" alt=""></img>
          <ul>
            <li>
              VRNihongo website: <a href="https://www.vrnihongo.com/">here</a>
            </li>
            <li>
              Helped shaped a community with help of a real Japanese teacher from Australia, named
              &quot;Moe Sensei&quot;
            </li>
            <li>
              We met on VRChat and organized meetings and eventually formed a very big community of
              our own
            </li>
            <li>
              I&apos;ve helped her become a youtuber, now she&apos;s successful in creating her own
              content with her own patreons
            </li>
          </ul>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>VRNihongo - Discord Server, 2019</h4>
        </CCardHeader>
        <CCardBody>
          <img src={vrnihongo1} width="70%" alt=""></img>
          <img src={vrnihongo2} width="50%" alt=""></img>
          <ul>
            <li>
              I&apos;ve created this discord server as a community server back around 2019, started
              with local friends, Moe Sensei, and friends of friends
            </li>
            <li>Is now a discontinued server as Moe Sensei branched off with her own server.</li>
            <li>
              Learned how a manage a huge community of 1-2k people! Appointed some discord
              moderators, event organizers, and so on.{' '}
            </li>
          </ul>
        </CCardBody>
      </CCard>
    </>
  )
}

export default VRNihongo
