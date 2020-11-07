import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage/ChatPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./shared/components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
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
            <Navbar />
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
