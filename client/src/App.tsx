import { useState } from 'react'
import { Routes, Route } from 'react-router'
import Navigation from './navigation'
import Home from './pages/home'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'budget' | 'charts'>('home')

  return (
    <>
    <Navigation activeTab={activeTab} setActiveTab={setActiveTab}/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/budget" element={<Home/>} />
      <Route path="/charts" element={<Home/>} />
    </Routes>
    </>
  );
};

export default App;
