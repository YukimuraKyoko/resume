import React from 'react'

const About = React.lazy(() => import('./views/about/About'))
const Degree = React.lazy(() => import('./views/degree/Degree'))
const CodingInstructor = React.lazy(() => import('./views/codinginstructor/CodingInstructor'))

// Developers
const UnityEditorDeveloper = React.lazy(() =>
  import('./views/developer/unityeditordeveloper/UnityEditorDeveloper'),
)
const VRDeveloper = React.lazy(() => import('./views/developer/vrdeveloper/VRDeveloper'))
const WebGLUnityProjects = React.lazy(() =>
  import('./views/developer/webglunityprojects/WebGLUnityProjects'),
)
const WebP5Projects = React.lazy(() => import('./views/developer/webp5projects/WebP5Projects'))
const OtherProjects = React.lazy(() => import('./views/developer/otherprojects/OtherProjects'))

// Animator
const ThreeDAnimations = React.lazy(() => import('./views/animator/ThreeDAnimations'))
const ThreeDModeling = React.lazy(() => import('./views/animator/ThreeDModeling'))
const OtherArtWorks = React.lazy(() => import('./views/animator/OtherArtWorks'))

// Japanese
const VRNihongo = React.lazy(() => import('./views/japanese/VRNihongo'))
const OtherWorks = React.lazy(() => import('./views/japanese/OtherWorks'))

// Other
const AmazonWarehouse = React.lazy(() => import('./views/other/AmazonWarehouse'))
const eBay = React.lazy(() => import('./views/other/eBay'))
const CCSFBookstore = React.lazy(() => import('./views/other/CCSFBookstore'))
const JapanTownRetail = React.lazy(() => import('./views/other/JapanTownRetail'))
const PharmacyTechnician = React.lazy(() => import('./views/other/PharmacyTechnician'))
const TruepillWarehouse = React.lazy(() => import('./views/other/TruepillWarehouse'))

const routes = [
  { path: '/', exact: true, name: 'About' },
  { path: '/degree', name: 'Degree', element: Degree },
  { path: '/amazonwarehouse', name: 'AmazonWarehouse', element: AmazonWarehouse },
  { path: '/ccsfbookstore', name: 'CCSFBookstore', element: CCSFBookstore },
  { path: '/ebay', name: 'eBay', element: eBay },
  { path: '/japantownretail', name: 'JapanTownRetail', element: JapanTownRetail },
  { path: '/pharmacytechnician', name: 'PharmacyTechnician', element: PharmacyTechnician },
  { path: '/truepillwarehouse', name: 'TruepillWarehouse', element: TruepillWarehouse },
  { path: '/vrnihongo', name: 'VRNihongo', element: VRNihongo },
  { path: '/otherworks', name: 'OtherWorks', element: OtherWorks },
  { path: '/animator/threedanimations', name: 'ThreeDAnimations', element: ThreeDAnimations },
  { path: '/animator/threedmodeling', name: 'ThreeDModeling', element: ThreeDModeling },
  { path: '/animator/otherartworks', name: 'OtherArtWorks', element: OtherArtWorks },
  { path: '/otherprojects', name: 'OtherProjects', element: OtherProjects },
  { path: '/codinginstructor', name: 'CodingInstructor', element: CodingInstructor },
  { path: '/about', name: 'About', element: About },
  { path: '/unityeditordeveloper', name: 'UnityEditorDeveloper', element: UnityEditorDeveloper },
  { path: '/vrdeveloper', name: 'VRDeveloper', element: VRDeveloper },
  { path: '/webglunityprojects', name: 'WebGLUnityProjects', element: WebGLUnityProjects },
  { path: '/webp5projects', name: 'WebP5Projects', element: WebP5Projects },
]

export default routes
