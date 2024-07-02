import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NewAnalysis from "./components/NewAnalysis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<NewAnalysis />} />
          <Route path="new-analysis" element={<NewAnalysis />} />
          <Route path="patient-record" element={<p>records</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
