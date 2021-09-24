import styled from "styled-components";
import { device } from "./utils/breakpoints";

const Article = styled.article`
  display: flex;
  align-items: center;
  margin-bottom: 33px;

  @media ${device.mobileL} {
    margin-bottom: 24px;
  }

  @media ${device.tablet} {
    display: initial;
  }
`;

const Image = styled.img`
  // width: 70px;
  width: min(117px, 18.67vw);
  border-radius: 50%;
  margin-right: 19.5px;

  @media ${device.mobileL} {
    // width: 117px;
    margin-right: 41px;
  }

  @media ${device.tablet} {
    position: absolute;
    left: 48px;
  }
`;

const Name = styled.h2`
  // font-size: 1rem; // 16px
  font-size: clamp(1rem, -0.4468rem + 6.1728vw, 1.625rem);
  font-weight: 700;
  // line-height: 24px;
  line-height: 6.4vw;
  letter-spacing: 0px;
  color: ${(props) => props.theme.logoColor};

  @media ${device.mobileL} {
    // font-size: 26px;
    font-weight: 700;
    line-height: 39px;
  }
`;

const Link = styled.a`
  font-family: inherit;
  // font-size: 13px;
  font-size: clamp(0.8125rem, -0.2002rem + 4.321vw, 1.25rem);
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  color: #0079ff;
  margin-bottom: 6px;
  text-decoration: none;

  @media ${device.mobileL} {
    // font-size: 16px;
    line-height: 24px;
  }

  @media ${device.tablet} {
    // margin-bottom: 20px;
    display: block;
  }
`;

const Text = styled.p`
  // font-size: 13px;
  font-size: clamp(0.8125rem, 0.5231rem + 1.2346vw, 0.9375rem);
  font-weight: 400;
  // line-height: 19px;
  line-height: min(5vw, 22px);
  letter-spacing: 0px;

  @media ${device.mobileL} {
    // font-size: 15px;
    // line-height: 22px;
  }

  @media ${device.tablet} {
    position: absolute;
    right: 48px;
    top: 48px;
    line-height: 39px;
  }
`;

function Info({ data }) {
  const date = new Date(data.created_at);
  const day = date.getDate();
  const month = date.toLocaleString("en", { month: "short" });
  const year = date.getFullYear();

  return (
    <Article>
      <Image src={data.avatar_url} alt="" />
      <div>
        <Name>{data.name ? data.name : data.login}</Name>
        <Link href={`https://github.com/${data.login}`} target="_blank">
          @{data.login}
        </Link>
        <Text>
          Joined {day} {month} {year}
        </Text>
      </div>
    </Article>
  );
}

export default Info;
