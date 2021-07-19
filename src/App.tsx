import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Chat } from './components/Chat';
import { AppLayout } from './layouts';

function App() {
  return (
    <AppLayout>
      <Chat />
    </AppLayout>
  );
}

export default App;
