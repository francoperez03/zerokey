import { Routes, Route } from 'react-router-dom';
import Test from './pages/test/Test';
import Landing from './pages/landing/Landing';
import LiveDemo from './pages/livedemo/LiveDemo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/livedemo" element={<LiveDemo/>} />
        <Route path="/test" element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;
