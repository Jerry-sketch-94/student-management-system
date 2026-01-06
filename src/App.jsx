import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Staff from './Staff';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login user={user} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </Router>
  );
}

export default App;
