import '../assets/styles/main.css';
import { Routes, Route } from 'react-router-dom';
import Head from './Head';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div>
      <Head />
      <Routes>
        <Route exact="true" path="/" element={<Rockets />} />
        <Route exact="true" path="/missions" element={<Missions />} />
        <Route exact="true" path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
