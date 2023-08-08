import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilDescription,
  cilStar,
  cibUnity,
  cibBlender,
  cilPen,
  cilBrush,
  cibEbay,
  cilMedicalCross,
  cilHouse,
  cilCart,
  cilGroup,
  cilSchool,
  cilUser,
  cilKeyboard,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'About Me',
    to: '/about',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavTitle,
    name: 'Software Developer',
  },
  {
    component: CNavItem,
    name: "Bachelors' Degree",
    to: '/degree',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Game Developer',
    icon: <CIcon icon={cibUnity} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'VR Developer',
        to: '/vrdeveloper',
      },
      {
        component: CNavItem,
        name: 'Unity Editor Developer',
        to: '/unityeditordeveloper',
      },
      {
        component: CNavItem,
        name: 'Web P5 Projects',
        to: '/webp5projects',
      },
      {
        component: CNavItem,
        name: 'WebGL Unity Projects',
        to: '/webglunityprojects',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Coding Instructor',
    to: '/codinginstructor',
    icon: <CIcon icon={cilSchool} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Other Projects',
    to: '/otherprojects',
    icon: <CIcon icon={cilKeyboard} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Animator',
  },
  {
    component: CNavItem,
    name: '3D Modeling',
    to: '/animator/threedmodeling',
    icon: <CIcon icon={cibBlender} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '3D Animations',
    to: '/animator/threedanimations',
    icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Other Art Works',
    to: '/animator/otherartworks',
    icon: <CIcon icon={cilBrush} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Japanese',
  },
  {
    component: CNavItem,
    name: "Minor's Degree",
    to: '/degree',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'VR Nihongo',
    to: '/vrnihongo',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Other Works',
    to: '/otherworks',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Other',
  },
  {
    component: CNavItem,
    name: 'Pharmacy Technician',
    to: '/charts',
    icon: <CIcon icon={cilMedicalCross} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'eBay Store',
    to: '/charts',
    icon: <CIcon icon={cibEbay} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Retail',
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CCSF Bookstore',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Japan Town Retail',
        to: '/register',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Warehouse',
    icon: <CIcon icon={cilHouse} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Truepill Warehouse',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Amazon Warehouse',
        to: '/register',
      },
    ],
  },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
