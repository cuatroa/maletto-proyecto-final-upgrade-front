import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage/ChatPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./shared/components/Navbar/Navbar";
// import WelcomePage from "./pages/WelcomePage/WelcomePage";
// import WorldPage from "./pages/WelcomePage/SonsPage/WorldPage/WorldPage"
// import PricesPage from "./pages/WelcomePage/SonsPage/PricesPage/PricesPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div>
        <Router>
          <div>
            <Switch>
              <Route path="/prices">
                <PricesPage />
              </Route>
              <Route path="/login">
              <LoginPage isLogged={isLogged} fnSetIsLogged={setIsLogged} />
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
              <Route path="/buscar">
                <HomePage />
              </Route>
              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
            {/* <Navbar /> */}
          </div>
        </Router>
    </div>
  );
}

export default App;
