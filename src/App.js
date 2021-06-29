import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Css/index.css";
import "./Css/utility.css";
import "./Css/animations.css";
import "./Css/custom-slick-rules.css";
import { IntercomProvider } from "react-use-intercom";
import { BrowserRouter as Router } from "react-router-dom";
import FBPixel from "./Components/Utilities/FBPixel";
import { hotjar } from "react-hotjar";
import ReactGA from 'react-ga';

const INTERCOM_APP_ID = "j8w2t672";

function App() {
  hotjar.initialize(2438375, 6);
  ReactGA.initialize('G-LDDTFBHGPL');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <FBPixel />
      <Router>
        <IntercomProvider appId={INTERCOM_APP_ID} autoBoot>
          <Header />
          <Main />
          <Footer />
        </IntercomProvider>
      </Router>
    </>
  );
}

export default App;
