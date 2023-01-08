import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/Dashboard"} element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
