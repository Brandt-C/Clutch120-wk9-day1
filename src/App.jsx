
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import MyNav from './components/MyNav';
import { useState } from 'react';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
/*
props-->  is an object that has input that a react function accepts

state --> state is data that changes over the lifecycle of a component

*/
function App() {
  const linkAddy = 'https://www.codingtemple.com/';

  const [students, setStudents] = useState(['Kaytlin', 'David', 'Jason', 'Orlando', 'Connor', 'Yousif']);

  return (
    <>
      <MyNav students={students}/>
      <Routes>
        <Route children path='/' element={<Home students={students} setStudents={setStudents}/>} />
        <Route children path='/shop' element={<Shop  />} />
        <Route children path='/cart' element={<Cart  />} />
        <Route children path='/checkout' element={<Checkout  />} />
      </Routes>
    </>
  )
}

export default App
