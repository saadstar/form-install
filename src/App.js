import "./App.css";
import { PageOne } from "./components/PageOne";
import { Switch, Route } from "react-router-dom";
import { Pagetwo } from "./components/Pagetwo";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <PageOne />
        </Route>
        <Route path="/install">
          <Pagetwo />
        </Route>
      </Switch>
    </div>
  );
}

export default App; 