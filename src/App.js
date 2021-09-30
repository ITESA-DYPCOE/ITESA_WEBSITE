import React, { Suspense } from "react";

//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

//Loader
import { BoltLoader } from "react-awesome-loaders";

//components
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Footer = React.lazy(() => import("./components/Footer/Footer"));
const Technical = React.lazy(() =>
  import("./components/Teams/Technical/Technical")
);
const Management = React.lazy(() =>
  import("./components/Teams/Management/Management")
);
const Cultural = React.lazy(() =>
  import("./components/Teams/Cultural/Cultural")
);
const Design = React.lazy(() => import("./components/Teams/Design/Design"));
const PastTeams = React.lazy(() =>
  import("./components/Teams/PastTeams/PastTeams")
);

//pages
const Home = React.lazy(() => import("./components/Pages/Home/Home"));
const Contact = React.lazy(() =>
  import("./components/Pages/Contact-Us/Contact")
);
const Events = React.lazy(() => import("./components/Pages/Events/Events"));
// import Faq from "./components/Faq/Faq";

//admin routes
const AdminRoute = React.lazy(() => import("./admin/auth/helper/AdminRoute"));
const PrivateRoute = React.lazy(() =>
  import("./admin/auth/helper/PrivateRoute")
);
const Signup = React.lazy(() => import("./admin/Signup/Signup"));
const SignIn = React.lazy(() => import("./admin/Signin/Signin"));
const AdminDashBoard = React.lazy(() =>
  import("./admin/dashboard/AdminDashBoard")
);
const UnApprovedAdminDashBoard = React.lazy(() =>
  import("./admin/dashboard/UnApprovedAdminDashBoard")
);

//admin components
const AddEvent = React.lazy(() => import("./admin/helper/AddEvent"));
const AddCategory = React.lazy(() => import("./admin/helper/AddCategory"));
const ManageEvents = React.lazy(() => import("./admin/helper/ManageEvents"));
const ManageCategories = React.lazy(() =>
  import("./admin/helper/ManageCategories")
);
const UpdateEvent = React.lazy(() => import("./admin/helper/UpdateEvent"));
const UpdateCate = React.lazy(() => import("./admin/helper/UpdateCate"));

//utils
const PageNotFound = React.lazy(() =>
  import("./components/utils/404ErrPage/PageNotFound")
);
const ScrollToTop = React.lazy(() => import("./components/utils/ScrollToTop"));

const App = () => {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <BoltLoader
              className={"loaderbolt"}
              boltColor={"#BA7CEE"}
              backgroundBlurColor={"#E0E7FF"}
            />
          }
        >
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/technical-team" component={Technical} />
            <Route path="/management-team" component={Management} />
            <Route path="/cultural-team" component={Cultural} />
            <Route path="/design-team" component={Design} />
            <Route path="/past-teams" component={PastTeams} />
            <Route path="/events" component={Events} />
            {/* <Route path="/faqs" component={Faq} /> */}
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
              path="/admin/update/category/:cateId"
              component={UpdateCate}
            />
            <AdminRoute
              exact
              path="/admin/create/category"
              component={AddCategory}
            />
            <AdminRoute
              exact
              path="/admin/manage/events"
              component={ManageEvents}
            />
            <AdminRoute
              exact
              path="/admin/manage/categories"
              component={ManageCategories}
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
        </Suspense>
      </Router>
    </>
  );
};

//Backend-testing on heroku :)

export default App;
