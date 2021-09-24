import React, { useState, useRef } from "react";
import searchIcon from "../images/icon-search.svg";
import styled from "styled-components";
import Content from "./Content";
import useFetch from "./hooks/useFetch";
import { device } from "./utils/breakpoints";

const Form = styled.form`
  position: relative;
  background: ${({ theme }) => theme.bgApp};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6.5px 7px 7.5px 16px;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow};

  img {
    width: 20px;
  }

  @media (min-width: 600px) {
    height: 69px;
    padding: 9.5px 10px 9.5px 32px;

    img {
      width: 24px;
    }
  }
`;

const Input = styled.input`
  font-family: inherit;
  font-size: 0.8125rem; //13px
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0px;
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  margin-left: 9px;
  margin-right: 7px;
  color: ${({ theme }) => theme.textColor};
  caret-color: #0079ff;

  @media ${device.mobileL} {
    font-size: 1.125rem; // 18px
    margin-left: 24px;
    margin-rigth: 10px;
  }

  ::placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;

const Button = styled.button`
  height: 100%;
  width: 84px;
  border-radius: 10px;
  color: white;
  border: none;
  outline: none;
  background: #0079ff;
  font-family: Space Mono;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0px;
  cursor: pointer;

  &:hover {
    background: #60abff;
  }
`;

const Error = styled.span`
  position: absolute;
  font-size: 0.8125rem; //13px
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  color: #f74646;
  right: 100px;

  @media ${device.tablet} {
    right: 120px;
  }
`;

function Search() {
  const inputEl = useRef(null);
  const [query, setQuery] = useState("octocat");
  const [data, error] = useFetch(query);

  return (
    <main>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(inputEl.current.value);
        }}
        spellCheck="false"
      >
        <img src={searchIcon} alt="" />
        <Input placeholder="Search GitHub username..." ref={inputEl} />
        <Button>Search</Button>
        {error && <Error>No results</Error>}
      </Form>
      {data ? (
        <Content data={data} />
      ) : (
        <div style={{ textAlign: "center", margin: "5rem" }}>Loading...</div>
      )}
    </main>
  );
}

export default Search;
