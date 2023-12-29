import logo from './logo.svg';
import './App.css';
import Sidebar from './component/LeftSide';
import {BrowserRouter,Route,Link, useParams} from 'react-router-dom'
import { Routes } from 'react-router-dom';

import SampleProject from './component/SampleProject';
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Sidebar/>}/>
      <Route path='/sampleproject' element={<SampleProject/>}/>
    </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;
