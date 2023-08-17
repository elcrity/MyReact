import { useCallback, useState } from 'react';
import './App.css';
import NewsPage from './components/NewsPage';
import {Routes, Route} from 'react-router-dom';

function App() {
  // const [category, setCategory] = useState('all');

  // const onSelect = useCallback(category => setCategory(category),[])
  
  
  return (
    <div className="App">
      <div>
        {/* <Categories category={category} onSelect={onSelect}/>
        <NewsItemList category={category}/> */}
        {/* {data && <NewsItemList articles={data}/>} */}
        <Routes>
          <Route path = '/:category?' element={<NewsPage/>}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
