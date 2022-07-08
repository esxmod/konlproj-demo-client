import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, NotFoundPage } from './pages';
import './App.css';

interface AppProps {}

function App(props: AppProps) {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
