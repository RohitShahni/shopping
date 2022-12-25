
import React from 'react';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Card from './components/Card';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector((state) => state.cartData)
  console.log("data in App======", data)

  return (
    <div className='App'>
      <Header />
      <Main />
      {
        data && data.map((item) =>
          <Card {...item} />
        )
      }
    </div>
  );
}

export default App;











