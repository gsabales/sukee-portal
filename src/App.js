import React from 'react';
import './App.css';
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header/>
      <PageContent/>
      <Footer/>
    </div>
  );
}

export default App;
