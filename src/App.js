import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoView from './components/TodoView';
import DetailView from './components/DetailView';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={TodoView} />
          <Route exact path="/detailview" component={DetailView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
