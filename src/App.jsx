import { BrowserRouter, Route, Router } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Route to="dashboard" />
      </Router>
    </BrowserRouter>
  );
}

export default App;
