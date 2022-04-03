import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Friend from './components/Friend/Friend';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import About from './components/About/About';
import ShowDetails from './components/ShowDetails/ShowDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friend" element={<Friend />} />
        <Route path="/friend/:id" element={<ShowDetails></ShowDetails>} />
        <Route path="/posts" element={<Posts />}>
          <Route path=':id' element={<PostDetails></PostDetails>} ></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
