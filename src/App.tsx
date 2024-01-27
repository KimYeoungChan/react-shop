import React from 'react';
import './App.css';
import Header from './Components/Common/Header';
import 'tailwindcss/tailwind.css';
import Router from './router/router';
import Footer from './Components/Common/Footer';
import Drawer from './Components/Common/Drawer';

function App() {
  return (
    <>
      <input type="checkbox" id="side-menu" className="drawer-toggle"></input>
      <section className="drawer-content">
        <Header />
        <Router />
        <Footer />
      </section>
      <Drawer />
    </>
  );
}

export default App;
