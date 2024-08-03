import { Routes, Route } from 'react-router-dom';
import LiveDemo from './components/demo/LiveDemo';
import Landing from './components/landing/Landing';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/livedemo" element={<LiveDemo/>} />
      </Routes>
    </div>
  );
}

export default App;
