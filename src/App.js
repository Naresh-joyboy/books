import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Comp from './components/Comp';
import Navbars from './components/Navbar';
import Side from './components/Side';
import Home from './components/Home'
import Categories from './components/Categories'
import Signup from './components/Signup'
import { Route,Routes ,BrowserRouter } from 'react-router-dom';

function App() {
  const url = "https://657976501acd268f9af911f3.mockapi.io/bbs/books/books";
   
  return (
    <BrowserRouter>
    <div className="App">
    <Navbars/>
    <Side path='/' url={url}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/categore' element={<Categories/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
