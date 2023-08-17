
import './App.css';
import {Route, Routes} from 'react-router-dom'
import NewsPage from './component/NewsPage';

function App() {

  
  return (
    <div>
        <Routes>
          <Route path = '/:category?' element={<NewsPage/>}/>
        </Routes>
      </div>
  );
}

export default App;
