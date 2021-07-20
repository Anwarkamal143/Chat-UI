import React from 'react';
import './App.css';
import { ChatWidget } from "./Pages/ChatWidget";
import { AppLayout } from './layouts';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>

    <AppLayout>
      <ChatWidget />
    </AppLayout>
    </Router>
  );
}

export default App;
