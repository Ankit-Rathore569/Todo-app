import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoView from './components/TodoView';
import DetailView from './components/DetailView';
import Completed from './components/Completed';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={TodoView} />
          <Route exact path="/detailview" component={DetailView} />
          <Route exact path="/completed-todo" component={Completed} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
