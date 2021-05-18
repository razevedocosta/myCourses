import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global'; 
import Routes from './routes';
import Modal from "react-modal";

import { CoursesProvider } from './CoursesContext';

const App: React.FC = () => {

  return (
    <CoursesProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>

        <GlobalStyle />  
    </CoursesProvider>
  )
};

export default App;
