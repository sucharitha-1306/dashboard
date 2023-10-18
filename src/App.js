import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App