import styled from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { BiLink, BiBuildings } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { device } from "./utils/breakpoints";

const Links = styled.ul`
  display: grid;
  gap: 16px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Link = styled.li`
  list-style-type: none;
  color: ${(props) => props.theme.textColor};
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;

  @media ${device.mobileL} {
    &:nth-child(3) {
      grid-column: 2;
      grid-row: 1;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 600px) {
    font-size: 15px;
    line-height: 22.22px;
  }

  svg {
    font-size: 20px;
    margin-right: 14px;
  }
`;

const Error = styled(Link)`
  opacity: 0.5;
`;

function Ctas({ location, website, twitter, company }) {
  const errorMessage = <Error as="span">Not Available</Error>;
  return (
    <article>
      <Links>
        <Link>
          <IoLocationSharp /> {location ? location : errorMessage}
        </Link>

        <Link>
          <BiLink /> {website ? <a href={website}>{website}</a> : errorMessage}
        </Link>

        <Link>
          <FaTwitter />{" "}
          {twitter ? (
            <a href={`https://twitter.com/${twitter}`}>{twitter}</a>
          ) : (
            errorMessage
          )}
        </Link>

        <Link>
          <BiBuildings />{" "}
          {company ? (
            <a href={`https://github.com/${company}`}>{company}</a>
          ) : (
            errorMessage
          )}
        </Link>
      </Links>
    </article>
  );
}

export default Ctas;
