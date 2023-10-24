import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
import './App.css'
export default function App() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}
