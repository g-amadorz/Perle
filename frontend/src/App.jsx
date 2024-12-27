import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/gallery'
import Header from './components/header'

function App() {
  return (
    <div>
      <Header/>
      <Gallery/>
    </div>
  )
}

export default App
