import './App.css';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Project from './pages/Project';
import Nav from './components/Nav';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/projects' element={<Project/>}/>
           <Route path='/experience' element={<Experience/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
