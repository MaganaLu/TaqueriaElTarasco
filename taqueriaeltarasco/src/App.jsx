import './App.css';
import Navbar from './components/Navbar.jsx';
import 
{
BrowserRouter as Router,
Route,
Routes
}from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Menu from './pages/Menu.jsx';
import Catering from './pages/Catering.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
    return (
      <Router>
        <Navbar />
          <div>
            <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/About' element={<About/>} />
               <Route path='/Menu' element={<Menu/>} />
               <Route path='/Catering' element={<Catering/>} />
            </Routes>
         </div>

         <Footer/>

       </Router>
    );
}

export default App
