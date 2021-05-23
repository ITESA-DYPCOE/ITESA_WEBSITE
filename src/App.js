import React from "react";

//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Technical } from "./components/Teams/Technical/Technical";
import { Management } from "./components/Teams/Management/Management";
import { Cultural } from "./components/Teams/Cultural/Cultural";
import { PastTeams } from "./components/Teams/PastTeams/PastTeams";

//pages
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact-Us/Contact";
import { Events } from "./components/Pages/Events/Events";

//utils
import PageNotFound from "./components/utils/404ErrPage/PageNotFound";
import { ScrollToTop } from "./components/utils/ScrollToTop";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/technical-team" component={Technical} />
          <Route path="/management-team" component={Management} />
          <Route path="/cultural-team" component={Cultural} />
          <Route path="/past-teams" component={PastTeams} />
          <Route path="/events" component={Events} />
          <Route path="/contact-us" component={Contact} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <ScrollToTop />
        <Footer />
      </Router>
    </>
  );
};

//Backend-testing on heroku :)

export default App;
