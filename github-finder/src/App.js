import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/pagenotfound' element={<PageNotFound />} />
          
        </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
