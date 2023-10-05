import GamePage from "./pages/Game/GamePage";
import HomePage from "./pages/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/poker-table" element={<GamePage />} />

          <Route path="*" element={<div>404 - Page Not FOUND</div>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
