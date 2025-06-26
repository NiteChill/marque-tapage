import { Route, Routes, useLocation } from "react-router-dom"
import { Home } from "../../pages/home/home";
import { Favorites } from "../../pages/favorites/favorites";
import { News } from "../../pages/news/news";

export const RoutesWithAnimation = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path='/' element={<Home />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/news' element={<News />} />
    </Routes>
  );
}