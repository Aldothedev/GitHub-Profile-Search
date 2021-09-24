import styled from "styled-components";
import { device } from "./utils/breakpoints";

const ReposContainer = styled.article`
  background: ${({ theme }) => theme.bgBody};
  padding: 18px 15px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 24px;

  @media ${device.mobileL} {
    text-align: left;
    margin-bottom: 30px;
  }

  @media ${device.tablet} {
    margin-bottom: 37px;
  }
`;

const Text = styled.h3`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  margin-bottom: 8px;

  @media ${device.mobileL} {
    font-size: 13px;
    line-height: 19px;
    margin-bottom: 1px;
  }
`;

const Number = styled.h3`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;

  @media ${device.mobileL} {
    font-size: 22px;
    line-height: 33px;
  }
`;

export default function Repos({ data }) {
  return (
    <ReposContainer>
      <div>
        <Text>Repos</Text>
        <Number>{data.public_repos}</Number>
      </div>
      <div>
        <Text>Followers</Text>
        <Number>{data.followers}</Number>
      </div>
      <div>
        <Text>Following</Text>
        <Number>{data.following}</Number>
      </div>
    </ReposContainer>
  );
}
