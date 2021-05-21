import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route
            path='/upload'
            exact
            render={(routerProps) => <UploadPage {...routerProps} />}
          />
          <Route path='/:videoId' exact component={HomePage} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
