import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Createblog from './Pages/Createblog';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Blog' element={<Blog/>}></Route>
      <Route path='/create' element={<Createblog/>}></Route>
      </Route>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
