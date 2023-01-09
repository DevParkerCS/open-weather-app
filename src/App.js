import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"*"} element={<h1>Fuck You</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
