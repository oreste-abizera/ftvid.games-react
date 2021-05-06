import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

function Routes(): ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="*" component={ErrorPage}></Route>
    </Switch>
  );
}

export default Routes;
