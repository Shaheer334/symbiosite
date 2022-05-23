import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import store from './components/redux/Store'
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'


async function start() {

  const res = await axios.get('http://localhost:3001/product/config')
  const stripePromise = loadStripe(res.data)

  console.log("Publishable Key :", res.data)

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

start()
reportWebVitals();