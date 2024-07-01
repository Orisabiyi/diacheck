import { BrowserRouter, Route, Router } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route to="/" element={<Dashboard />} />
      </Router>
    </BrowserRouter>
  );
}

export default App;
