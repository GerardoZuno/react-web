import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home'
import {Services} from './components/pages/Services'
import {Products} from './components/pages/Products'
import {SignUp} from './components/pages/SignUp'




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/services" exact component={Services}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/sign-up" exact component={SignUp}/>


        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
