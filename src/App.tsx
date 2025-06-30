import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/home/home';
import { Favorites } from './pages/favorites/favorites';
import { News } from './pages/news/news';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
