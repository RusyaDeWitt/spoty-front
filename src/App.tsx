import React from 'react';

import './App.css';
import { MainLayout } from './Layout';
import { RouteList } from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <RouteList />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
