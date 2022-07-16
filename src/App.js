import './App.css';
import Login from './Login';
import Register from './Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;
