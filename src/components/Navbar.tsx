import React, { ReactElement } from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Navbar(): ReactElement {
  const history = useHistory();

  return (
    <NavbarWrapper>
      <Tilt className="tilt">
        <img
          onClick={() => history.push("/")}
          src="./images/logo.png"
          alt="Logo"
        ></img>
      </Tilt>
      <div className="searchBox">
        <input type="text" placeholder="Search videos here"></input>
        <FaSearch></FaSearch>
      </div>
    </NavbarWrapper>
  );
}

const NavbarWrapper = styled.div`
  /* background-color: #2d4059; */
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20% 0 2rem;
  box-shadow: 0px 8px 5px -6px rgba(193, 191, 191, 0.75);
  -webkit-box-shadow: 0px 8px 5px -6px rgba(193, 191, 191, 0.75);
  -moz-box-shadow: 0px 8px 5px -6px rgba(193, 191, 191, 0.75);

  > .tilt {
    height: 70%;
  }
  img {
    height: 100%;
    cursor: pointer;
  }

  .searchBox {
    display: flex;
    height: 50%;
    min-width: 30%;
    align-items: flex-end;
    margin-left: 1rem;
  }

  .searchBox input {
    width: 90%;
    height: 100%;
    border: 1.5px solid #e5e5e5;
    outline: none;
    padding: 0.5rem;
  }

  .searchBox > svg {
    width: 10%;
    height: 100%;
    border: 1.5px solid #e5e5e5;
    color: #e5e5e5;
    padding: 0.2rem;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    .searchBox input {
      width: 85%;
    }
    .searchBox > svg {
      width: 15%;
    }
  }
`;
