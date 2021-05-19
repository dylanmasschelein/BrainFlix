import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact />
          <Route path='/:videoId' component={HomePage} />
          <Route path='/upload' component={UploadPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
