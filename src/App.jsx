
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import MyNav from './components/MyNav';
import { useState } from 'react';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import SimpleForms from './views/SimpleForms';
import ContForms from './views/ContForms';
import BsForm from './views/BsForm';
import DemoForm from './views/DemoForm';
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
        <Route children path='/simpleforms' element={<SimpleForms  />} />
        <Route children path='/contforms' element={<ContForms  />} />
        <Route children path='/bsform' element={<BsForm />} />
        <Route children path='/demoform' element={<DemoForm />} />
      </Routes>
    </>
  )
}

export default App
