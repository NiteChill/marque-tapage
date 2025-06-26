import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { LocationProvider } from './components/location-provider/location-provider';
import { RoutesWithAnimation } from './components/route-with-animation/routes-with-animation';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
