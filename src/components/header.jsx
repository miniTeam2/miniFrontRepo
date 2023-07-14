import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
      <HeaderWrapper>
        <Logo>
          <NavLink to="/">루튼토마토</NavLink>
        </Logo>
        <Navigation>
          <NavList>
            <NavItem>
              <NavLink to="/login">로그인</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup">회원가입</NavLink>
            </NavItem>
          </NavList>
        </Navigation>
      </HeaderWrapper>
    );
  }
export default Header;