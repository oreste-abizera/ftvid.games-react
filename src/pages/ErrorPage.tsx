import { ReactElement } from "react";
import styled from "styled-components";

function ErrorPage(): ReactElement {
  return <ErrorPageWrapper>404 == page not found</ErrorPageWrapper>;
}

const ErrorPageWrapper = styled.div``;

export default ErrorPage;
