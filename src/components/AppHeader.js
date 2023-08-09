import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilEnvelopeOpen,
  cilList,
  cilMenu,
  cibFacebook,
  cibEbay,
  cibLinkedin,
  cibDiscord,
  cibTwitch,
  cibTwitter,
  cibSteam,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto"></CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink href="https://www.linkedin.com/in/tina-nguyen-342610136/" target="_blank">
              <CIcon icon={cibLinkedin} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://www.facebook.com/haruka.yukimura.35" target="_blank">
              <CIcon icon={cibFacebook} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://www.ebay.com/str/kyokostore" target="_blank">
              <CIcon icon={cibEbay} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://discordapp.com/users/925560438119354458" target="_blank">
              <CIcon icon={cibDiscord} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://www.twitch.tv/yukimurakyoko" target="_blank">
              <CIcon icon={cibTwitch} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://twitter.com/Yukimura_Kyoko" target="_blank">
              <CIcon icon={cibTwitter} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="https://steamcommunity.com/id/Haruka290/" target="_blank">
              <CIcon icon={cibSteam} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>

        {/* <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav> */}
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
