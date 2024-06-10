import '../src/style/style.scss';
import { Helmet } from "react-helmet";

import MainPage from './components/MainPage';
import Header from './components/header';
import CatalogPage from './components/CatalogPage';
import RegistrationPage from './components/RegistrationPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CardPage from './components/CardPage';

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
          <Router>
            <Routes>
              <Route path='/' element={<MainPage />}></Route>
              <Route path='/catalog' element={<CatalogPage />} />
              <Route path='/card' element={<CardPage />} />
              <Route path='/registration' element={<RegistrationPage />} />
            </Routes>
          </Router>
          </div>
    </>
    
  );
}

export default App;
