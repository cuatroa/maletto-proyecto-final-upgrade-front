import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage/ChatPage";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import WorldPage from "./pages/WelcomePage/SonsPage/WorldPage/WorldPage"
import PricesPage from "./pages/WelcomePage/SonsPage/PricesPage/PricesPage";
// import MoreExperiences from "./pages/HomePage/SonsPage/MoreExperiences/MoreExperiences";
import Experiences from "./pages/HomePage/SonsPage/Experiences/Experiences";
import SearchPage from "./pages/SearchPage/SearchPage";
import UserPage from "./pages/UserPage/UserPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import UserBookingPage from "./pages/UserPage/UserBookingPage/UserBookingPage";
import BookingDetailPage from "./pages/SearchPage/SonsPage/BookingDetailPage/BookingDetailPage";
import SearchInfoPage from "./pages/SearchPage/SearchInfoPage/SearchInfoPage";
import BookingCompletePage from "./pages/SearchPage/SonsPage/BookingCompletePage/BookingCompletePage";
import GuardianPage from "./pages/GuardianPage/GuardianPage";
import GuardianSpacesPage from "./pages/GuardianPage/SonsPage/GuardianSpacesPage/GuardianSpacesPage";
import PublishPage from "./pages/GuardianPage/SonsPage/PublishPage/PublishPage";
import DemoPage from "./pages/DEMOpage/DemoPage";
import UserEditPage from "./pages/UserPage/UserEditPage/UserEditPage";
// import Login from "./pages/LoginPage/SonsPage/Login/Login";
// import Register from "./pages/LoginPage/SonsPage/Register/Register";
import BookingPetitionsPage from "./pages/GuardianPage/SonsPage/BookingPetitionPage/BookingPetitionsPage";
import BookingInfoPage from "./pages/UserPage/BookingInfoPage/BookingInfoPage";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/user/edit">
              <UserEditPage />
            </Route>
            <Route path="/DEMO">
              <DemoPage />
            </Route>
            <Route path="/booking/complete">
              <BookingCompletePage />
            </Route>
            <Route path="/booking/:_id">
              <BookingDetailPage />
            </Route>
            <Route path="/guardian/publish">
              <PublishPage />
            </Route>
            <Route path="/guardian/spaces">
              <GuardianSpacesPage />
            </Route>
            <Route path="/guardian">
              <GuardianPage />
            </Route>
            <Route path="/search/:_id">
              <SearchInfoPage />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/user/booking/:_id">
              <BookingInfoPage />
            </Route>
            <Route path="/user/:_id">
              <UserBookingPage />
            </Route>
            <Route path="/user">
              <UserPage />
            </Route>
            <Route path="/login">
              <LoginPage />
              {/* isLogged={isLogged} fnSetIsLogged={setIsLogged} */}
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
            <Route path="/chat">
              <ChatPage />
            </Route>
            {/* <Route path="/register-form">
              <RegisterForm />
            </Route>
            <Route path="/login-form">
              <Login /> */}
            {/* </Route> */}
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
