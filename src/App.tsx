import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, SAPage, SumPage, NotFoundPage } from './pages';
import './App.css';

interface AppProps {}

function App(props: AppProps) {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sa' element={<SAPage />} />
      <Route path='/sum' element={<SumPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
