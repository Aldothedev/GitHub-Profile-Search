import React from "react";
import styled from "styled-components";
import Info from "./Info";
import { device } from "./utils/breakpoints";
import Bio from "./Bio";
import Repos from "./Repos";
import Socials from "./Socials";

const Section = styled.div`
  background: ${({ theme }) => theme.bgApp};
  padding: 32px 24px 48px;
  border-radius: 15px;
  margin-top: 16px;
  position: relative;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media ${device.mobileL} {
    padding: 40px;
  }

  @media ${device.tablet} {
    padding: 48px;
    padding-left: 202px;
  }
`;

function Content({ data }) {
  return (
    <Section>
      <Info data={data} />
      <Bio bio={data.bio} />
      <Repos data={data} />
      <Socials
        location={data.location}
        website={data.blog}
        twitter={data.twitter_username}
        company={data.company}
      />
    </Section>
  );
}

export default Content;
