import { ReactElement } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";

function ErrorPage(): ReactElement {
  return (
    <ErrorPageWrapper>
      <Navbar></Navbar>
      <div className="error__container">
        <p>Oops, You lost the way!</p>
        <Link to="/">Return to Home</Link>
      </div>
    </ErrorPageWrapper>
  );
}

const ErrorPageWrapper = styled.div`
  .error__container {
    width: 100%;
    height: calc(100vh - 65px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .error__container p {
    margin-bottom: 1rem;
  }
`;

export default ErrorPage;
