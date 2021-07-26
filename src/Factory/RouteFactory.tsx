import { ProtectedRoute } from "../routes/ProtectedRoute";
import { DefaultRoute } from "../routes/DefaultRoute";
import { Route } from "react-router";

export class RouteFactory {
  createRoute(type: string, to: string) {
    switch (type) {
      case "route":
        return this._createRoute(to);
      case "protectedRoute":
        return this._createProtectedRoute(to);
      case "defaultRoute":
        return this._createDefaultRoute();
    }
  }

  private _createRoute(to: string) {
    return <Route path={`${to}`} />;
  }

  private _createProtectedRoute(to: string) {
    return <ProtectedRoute path={`${to}`} />;
  }

  private _createDefaultRoute() {
    return <DefaultRoute />;
  }
}
