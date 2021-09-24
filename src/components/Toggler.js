import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";
import { darkTheme } from "./utils/Theme";
import { FaMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 2.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 78px;

  svg {
    font-size: 20px;
  }

  &:hover {
    color: ${({ theme }) => (theme === darkTheme ? "black" : "#90A4D4")};
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          DARK <FaMoon />
        </>
      ) : (
        <>
          LIGHT <BsSun />
        </>
      )}
    </Button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
