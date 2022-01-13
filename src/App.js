import React from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom'
import AllContent from './component/AllContent'

function App() {
  return (
    <>
     <Routes>
       <Route path='/' element={<AllContent/>}/>
     </Routes>
    </>
  );
}

export default App;
