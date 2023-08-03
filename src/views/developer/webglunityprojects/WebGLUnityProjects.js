import React from 'react'
import { Unity, useUnityContext } from 'react-unity-webgl'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'

const WebGLUnityProjects = () => {
  //CURRENTLY RETURNS A Unexpected token '<' error
  //Falling back to regular html WebGL load
  //
  const { unityProvider } = useUnityContext({
    loaderUrl: '/epic/Build/epic.loader.js',
    dataUrl: '/epic/Build/epic.data',
    frameworkUrl: '/epic/Build/epic.framework.js',
    codeUrl: '/epic/Build/epic.wasm',
  })

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Epic Roll a Ball</h4>
        </CCardHeader>
        <CCardBody>
          <Unity unityProvider={unityProvider} />
          <p>Currently broken, awaiting on a support ticket</p>
          {/* <a href="assets/webgl/WebGL2/index.html" target="_blank">
            Game Link
          </a> */}
        </CCardBody>
      </CCard>
    </>
  )
}

export default WebGLUnityProjects
