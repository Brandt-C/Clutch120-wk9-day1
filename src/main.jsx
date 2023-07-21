import React from 'react'
import ReactDOM from 'react-dom/client'

// import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ProviderLayer from './ProviderLayer';
import { FirebaseAppProvider } from 'reactfire';

const TEST_KEY = import.meta.env.VITE_TEST_KEY;
console.log(TEST_KEY);
/*
.env file here has:
VITE_TEST_KEY='LookatmeImakey!!!!!!!!!!!!!!"

reference docs:
https://vitejs.dev/guide/env-and-mode.html
*/

const firebaseConfig = {
  apiKey: 'AIzaSyCoRbOTFIwCu7CfH3YiReP8HRSV1iEw7BI',
  authDomain: "clutch-120.firebaseapp.com",
  projectId: "clutch-120",
  storageBucket: "clutch-120.appspot.com",
  messagingSenderId: "959615112672",
  appId: "1:959615112672:web:0a4a2fc709d20e37644785"
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <ProviderLayer />
      </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
