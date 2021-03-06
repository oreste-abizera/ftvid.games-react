import { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import VideosPage from "./pages/VideosPage";
import SingleVideoPage from "./pages/SingleVideoPage";
import SearchVideosPage from "./pages/SearchVideosPage";

function Routes(): ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/videos" component={VideosPage}></Route>
      <Route exact path="/videos/:id" component={SingleVideoPage}></Route>
      <Route exact path="/search" component={SearchVideosPage}></Route>
      <Route path="*" component={ErrorPage}></Route>
    </Switch>
  );
}

export default Routes;
