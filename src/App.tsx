import React from 'react'

import './App.css'
import { Form } from './components/Form'
import NavBar from './components/navBar/Nav'

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <Form />
    </div>
  )
}

export default App
