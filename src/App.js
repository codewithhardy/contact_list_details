import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header/Header";
import Contact from "./Component/Contact/Contact";
import ContacttDetails from "./Component/Contact/DetailListing";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <BrowserRouter>
        <Link to="/Contact"></Link>
        <div>
          <Route exact path="/" component={Contact}></Route>
          <Route exact path="/contact/:userstId" component={ContacttDetails} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
