import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<p>Analyze</p>} />
          <Route path="new-analysis" element={<p>Analyze</p>} />
          <Route path="patient-record" element={<p>records</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
