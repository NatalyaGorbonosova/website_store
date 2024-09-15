import '../src/style/style.scss';
import { Helmet } from "react-helmet";

import MainPage from './components/MainPage';

import CatalogPage from './components/CatalogPage';
import RegistrationPage from './components/RegistrationPage';
import { Route, BrowserRouter as Router, Routes, HashRouter } from 'react-router-dom';
import CartPage from './components/CartPage';

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
        <div className='contenr center'>
          <HashRouter>
            <Routes>
              <Route path='/' element={<MainPage exact />}></Route>
              <Route path='/catalog' element={<CatalogPage />} />
              <Route path='/card' element={<CartPage />} />
              <Route path='/registration' element={<RegistrationPage />} />
            </Routes>
          </HashRouter>
          </div>
    </>
    
  );
}

export default App;
