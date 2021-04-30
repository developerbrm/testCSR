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
const INTERCOM_APP_ID = "j8w2t672";

function App() {
  return (
    <IntercomProvider appId={INTERCOM_APP_ID} autoBoot>
      <Header />
      <Main />
      <Footer />
    </IntercomProvider>
  );
}

export default App;
