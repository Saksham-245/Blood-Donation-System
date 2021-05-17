import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Contact from "./pages/ContactUs";
import Donar from "./pages/Donar";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/search" exact={true} component={Search} />
        <Route path="/donar" exact component={Donar} />
        <Route path="/contact" exact={true} component={Contact} />
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
