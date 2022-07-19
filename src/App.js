import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home/Home';
import Appointment from './Appointment/Appointment';
import Navigation from './Shared/Navigation/Navigation';

function App() {
  return (
    <Router>

        <div className="App">
        <Navigation />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<Appointment />} />

          </Routes>
    </div>

      </Router>
      
  );
}

export default App;
