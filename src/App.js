import React from "react";
//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Technical from "./components/Teams/Technical/Technical";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Management from "./components/Teams/Management/Management";
import Cultural from "./components/Teams/Cultural/Cultural";
import Design from "./components/Teams/Design/Design";
import PastTeams from "./components/Teams/PastTeams/PastTeams";
//pages
import Home from "./components/Pages/Home/Home";
import Contact from "./components/Pages/Contact-Us/Contact";
import Events from "./components/Pages/Events/Events";
//admin routes
import AdminRoute from "./admin/auth/helper/AdminRoute";
import PrivateRoute from "./admin/auth/helper/PrivateRoute";
import Signup from "./admin/Signup/Signup";
import SignIn from "./admin/Signin/Signin";
import AdminDashBoard from "./admin/dashboard/AdminDashBoard";
import UnApprovedAdminDashBoard from "./admin/dashboard/UnApprovedAdminDashBoard";
//admin components
import AddEvent from "./admin/helper/AddEvent";
import ManageEvents from "./admin/helper/ManageEvents";
import UpdateEvent from "./admin/helper/UpdateEvent";
//utils
import PageNotFound from "./components/utils/404ErrPage/PageNotFound";
import ScrollToTop from "./components/utils/ScrollToTop";
import { ToastContainer } from "material-react-toastify";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <div className="toast">
          <ToastContainer position="bottom-center" />
        </div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/technical-team" component={Technical} />
          <Route path="/management-team" component={Management} />
          <Route path="/cultural-team" component={Cultural} />
          <Route path="/design-team" component={Design} />
          <Route path="/past-teams" component={PastTeams} />
          <Route path="/events" component={Events} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/admin/dashboard/sign-up" component={Signup} />
          <Route path="/admin/sign-in" component={SignIn} />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashBoard}
          />
          <AdminRoute exact path="/admin/create/event" component={AddEvent} />
          <AdminRoute
            exact
            path="/admin/update/event/:eventId"
            component={UpdateEvent}
          />
          <AdminRoute
            exact
            path="/admin/manage/events"
            component={ManageEvents}
          />
          <PrivateRoute
            exact
            path="/unapproved/dashboard"
            component={UnApprovedAdminDashBoard}
          />
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
