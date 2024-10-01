import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import View from './pages/View'
import Wish from './pages/Wish'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/view/:id' element={<View/>}/>
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/wish' element={<Wish/>}/>
      </Routes>
    </>
  )
}

export default App
