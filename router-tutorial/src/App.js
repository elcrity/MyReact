import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import Profiles from './pages/Profiles';
import Profile from './pages/Profile';
import { Routes, Route, Link, useParams } from 'react-router-dom'
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './pages/Layout';
import StyledComponents from './pages/StyledComponents';
import ScssBtn from './pages/ScssBtn';
import Check from './pages/Check';
import APISample from './components/APISample';
import APIpage from './pages/APIpage';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">H</Link>
        </li>
        <li>
          <Link to="/about?detail=true&mode=200">A</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시판</Link>
        </li>
        <li>
          <Link to="/styledCompo">버튼</Link>
        </li>
        <li>
          <Link to="/scssBtn">scss버튼</Link>
        </li>
        <li>
          <Link to="/check">췍췍</Link>
        </li>
        <li>
          <Link to="/api">API</Link>
        </li>
      </ul>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profiles/*' element={<Profiles />}>
            <Route path=':username' element={<Profile />}></Route>
          </Route>
        </Route>
        <Route path='/articles/' element={<Articles />}>
          <Route path=':id' element={<Article />}></Route>
        </Route>
        <Route path='/styledCompo' element={<StyledComponents/>}></Route>
        <Route path='/scssBtn' element={<ScssBtn size='medium' color='red'/>}></Route>
        <Route path='/check' element={<Check/>}></Route>
        <Route path='/api' element={<APIpage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
