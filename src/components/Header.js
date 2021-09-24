import React from "react";
import styled from "styled-components";
import Toggle from "./Toggler";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 36px;
`;

const Logo = styled.h1`
  font-size: 1.625rem; // 16px
  font-weight: 700;
  line-height: 39px;
  letter-spacing: 0px;
  color: ${(props) => props.theme.logoColor};
`;

function Header({ theme, themeToggler }) {
  return (
    <HeaderContainer>
      <Logo>GitHub User Search</Logo>
      <Toggle theme={theme} toggleTheme={themeToggler} />
    </HeaderContainer>
  );
}

export default Header;
