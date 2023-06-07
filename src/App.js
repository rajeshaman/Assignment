import './App.css';
import MovieBookingPage from './Pages/MovieBookingPage';
import MoviesPage from './Pages/MoviesPage';
import { Card } from 'react-bootstrap';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <BrowserRouter>
      
        <Card className='sticky-nav'>
          <h1 className='text-center m-2'>
            Movie Mania
          </h1>
        </Card>
      
      <Routes>
        <Route exact path='/' element={<MoviesPage />} />
        <Route exact path='/bookmovie/:id' element={<MovieBookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
