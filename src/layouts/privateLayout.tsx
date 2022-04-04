import { Route, Switch } from "react-router-dom";
import { AppRouteUi } from "../configs";
import {
  PageDashboard,
  PageTools,
  PageNews,
  PageMethologyAndData,
} from "./pages";

export function LayoutPrivate(): JSX.Element {
  return (
    <Switch>
      <Route path={AppRouteUi.Dashboard.Root()} exact component={PageDashboard} />
      <Route path={AppRouteUi.Tools.Root()} exact component={PageTools} />
      <Route path={AppRouteUi.News.Root()} exact component={PageNews} />
      <Route path={AppRouteUi.MethologyAndData.Root()} exact component={PageMethologyAndData} />
    </Switch>
  );
}