import React from "react";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import ScrollToTop from "./Utilities/ScrollToTop";
import { Route, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";

const Main = () => {
  return (
    <main>
      <ScrollToTop />

      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </main>
  );
};

export default Main;
