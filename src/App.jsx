import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage/ChatPage";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import WorldPage from "./pages/WelcomePage/SonsPage/WorldPage/WorldPage"
import PricesPage from "./pages/WelcomePage/SonsPage/PricesPage/PricesPage";
// import MoreExperiences from "./pages/HomePage/SonsPage/MoreExperiences/MoreExperiences";
import Experiences from "./pages/HomePage/SonsPage/Experiences/Experiences";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";



function App() {
  return (
    <div>
        <Router>
          <div>
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/experiences">
                <Experiences />
              </Route>
              <Route path="/prices">
                <PricesPage />
              </Route>
              <Route path="/world">
                <WorldPage />
              </Route>
              <Route path="/welcome">
                <WelcomePage />
              </Route>
              <Route path="/usuario">
                <HomePage />
              </Route>
              <Route path="/chat">
                <ChatPage />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route exact path="/">
              <LandingPage />
            </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
