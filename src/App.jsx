
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import MyNav from './components/MyNav';


function App() {
  const linkAddy = 'https://www.codingtemple.com/';

  return (
    <>
      <MyNav />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/shop' element={<Shop />} />
      </Routes>
      <div>
        <a href={linkAddy} target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href={linkAddy} target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
