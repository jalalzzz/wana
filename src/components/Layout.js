import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./account/Home";
import Dashboard from "./account/Dashboard";
import LogIn from "./account/LogIn";
import SignUp from "./account/SignUp";
import { AuthProvider } from "./account/Auth";
import Blog from "./data/Blog/Blog";
import SimpleMap from "./maps/SimpleMap";
import Header from "./header/Header";
import BorderAssociation from "./BorderAssociation";

function Layout() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="wrapper">

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/post" component={Blog} />
            <Route exact path="/map" component={SimpleMap} />
            <Route path="/:name" exact component={(props) => <BorderAssociation {...props} key={window.location.pathname}/>} />
          </Switch>
        </div>
      </Router>


    </AuthProvider>
  );

}
export default Layout;