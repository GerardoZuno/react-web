import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import {HeroSection} from './components/HeroSection'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path="/" exact component={HeroSection}/>
          <Route path="/" exact/>
          <Route path="/" exact/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
