import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/" exact/>
          <Route path="/" exact/>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
