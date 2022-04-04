import { Route, Switch } from "react-router-dom";
import { AppRouteUi } from "../configs";
import { PageLogin, PageNotFound } from "./pages";
import { PageHome } from "./pages/pageHome";

export function LayoutPublic(): JSX.Element {
  return (
    <Switch>
      <Route path={AppRouteUi.Login.Root()} exact component={PageLogin} />
      <Route path={AppRouteUi.Home.Root()} exact component={PageHome} />
      <Route path={AppRouteUi.NotFound.Root()} exact component={PageNotFound} />
    </Switch>
  );
}