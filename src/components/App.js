import '../assets/styles/main.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Head from './Head';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route exact="true" path="/" element={<Rockets />} />
          <Route exact="true" path="/missions" element={<Missions />} />
          <Route exact="true" path="/profile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
