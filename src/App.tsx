
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/layout/NavBar';

function App() {

  return (

    <div className="App">  
      <NavBar/>   
      <Routes>
        <Route path="/" element={ <Home/>}/>     
      </Routes>      
    </div>
  )
}

export default App;