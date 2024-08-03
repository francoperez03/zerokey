import { Routes, Route } from 'react-router-dom';
import LiveDemo from './components/demo/LiveDemo';
import Landing from './components/landing/Landing';
import Test from './components/test/Test';

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
