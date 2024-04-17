import React, { useContext } from "react";
import Home from "./Components/NavComponents/Home.jsx";
import Nav from "./Components/NavComponents/Nav.jsx";
import Footer from './Components/NavComponents/Footer.jsx';
import Error from './Components/Error/index.jsx'
import Dashboard from "./Components/Home/Dashboard.jsx";
import { useAuth } from "./contexts/authContext/index.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
export default function appRouter() {

  const { userLoggedIn, } = useAuth();
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={userLoggedIn ? <Dashboard /> : <Home />} />
          <Route
            path="/home"
            element={userLoggedIn ? <Dashboard /> : <Error />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

