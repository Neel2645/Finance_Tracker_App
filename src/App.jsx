import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App
