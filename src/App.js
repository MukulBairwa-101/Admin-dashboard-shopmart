import {BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
// components
import Landingpage from './pages/Landingpage';


// assets
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
