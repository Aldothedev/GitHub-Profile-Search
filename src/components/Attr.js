import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const Wrapper = styled.a`
  // position: absolute;
  bottom: 10px;
  left: 50%;
  // transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  color: ${(props) => props.theme.textColor};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  svg {
    font-size: 35px;
    margin-right: 10px;
  }
`;

function Attr() {
  return (
    <Wrapper
      href="https://github.com/Aldothedev"
      target="_blank"
      rel="noreferrer"
    >
      <AiFillGithub />
      AldoTheDev
    </Wrapper>
  );
}

export default Attr;
