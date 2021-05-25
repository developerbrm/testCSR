import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import ScrollToTop from "./Utilities/ScrollToTop";
import Quotes from "./Pages/Quotes";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Guide from "./Pages/Guide";

const Main = () => {
  return (
    <main>
      <ScrollToTop />

      <Switch>
        <Route exact path="/download" component={Guide} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </main>
  );
};

export default Main;
