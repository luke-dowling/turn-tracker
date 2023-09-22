import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Tracker from './pages/Tracker';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tracker" element={<Tracker />} />
    </Routes>
  </BrowserRouter>
);

export default App;
