import React from 'react';
import './App.css';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const darkMode = useSelector((state) => state.darkMode.mode);

  return (
    <div className={`min-h-screen flex flex-wrap content-between ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
