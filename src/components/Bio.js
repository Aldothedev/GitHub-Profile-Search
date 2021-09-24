import styled from "styled-components";
import { device } from "./utils/breakpoints";

const Article = styled.article`
  font-size: 13px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  margin: 33px 0 23px;

  @media ${device.mobileL} {
    font-size: 15px;
    margin: 24px 0 32px;
  }

  @media ${device.tablet} {
    margin: 20px 0 32px;
  }
`;

function Bio({ bio }) {
  if (!bio)
    return (
      <Article style={{ opacity: "0.75" }}>This profile has no bio</Article>
    );
  return <Article>{bio}</Article>;
}

export default Bio;
