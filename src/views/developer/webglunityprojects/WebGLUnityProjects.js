import React from 'react'
// import { Unity, useUnityContext } from 'react-unity-webgl'
import { CCard, CCardBody, CCardHeader } from '@coreui/react'
import rollaballvid from 'src/assets/videos/RollABall.mp4'
import shaderspherevid from 'src/assets/videos/ShaderSphereDemo.mp4'

const WebGLUnityProjects = () => {
  //CURRENTLY RETURNS A Unexpected token '<' error
  //Falling back to regular html WebGL load
  //
  // const { unityProvider } = useUnityContext({
  //   loaderUrl: '/epic/Build/epic.loader.js',
  //   dataUrl: '/epic/Build/epic.data',
  //   frameworkUrl: '/epic/Build/epic.framework.js',
  //   codeUrl: '/epic/Build/epic.wasm',
  // })

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Epic Roll a Ball</h4>
        </CCardHeader>
        <CCardBody>
          {/* <Unity unityProvider={unityProvider} /> */}
          <video controls width="70%" height="70%" src={rollaballvid} />
          <br></br>
          <a
            type="button"
            className="btn btn-lg btn-primary"
            href="https://yukimurakyoko.github.io/webglhost/epic/index.html"
            d
            target="_blank"
            rel="noreferrer"
          >
            Open Game
          </a>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>
          <h4>Shadersphere</h4>
        </CCardHeader>
        <CCardBody>
          {/* <Unity unityProvider={unityProvider} /> */}
          <video controls width="70%" height="70%" src={shaderspherevid} />
          <br></br>
          <a
            type="button"
            className="btn btn-lg btn-primary"
            href="https://yukimurakyoko.github.io/webglhost/shadersphere/index.html"
            d
            target="_blank"
            rel="noreferrer"
          >
            Open Game
          </a>
        </CCardBody>
      </CCard>
    </>
  )
}

export default WebGLUnityProjects
