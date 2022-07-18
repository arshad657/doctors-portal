import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
