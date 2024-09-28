import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ToDoAppPage from './pages/ToDoAppPage';
import NoteAppPage from './pages/NoteAppPage';
import WeatherAppPage from './pages/WeatherAppPage';

function App() {
  return (
    <>
    <Header />
    <div className='w-full h-svh'>
      <Routes>
        <Route path="/" element= {<DashboardPage />} />
        <Route path="/todo-app" element={ <ToDoAppPage />} />
        <Route path='/note-app' element={ <NoteAppPage />} />
        <Route path='/weather-app' element={ <WeatherAppPage />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
