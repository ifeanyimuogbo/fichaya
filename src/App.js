import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { Requests } from "./pages";
import { Navigation } from "./components";
import * as routes from "./config/routeUrls";
import { GlobalStyles, theme } from "./styling";

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Navigation />
        <Switch>
          <Route exact path={routes.requestsPage} component={Requests} />
        </Switch>
      </MuiThemeProvider>
    </Router>
  );
};
export default App;
