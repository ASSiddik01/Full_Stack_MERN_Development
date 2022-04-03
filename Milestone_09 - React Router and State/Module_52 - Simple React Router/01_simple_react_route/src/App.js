import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Friend from './components/Friend/Friend';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friend />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
