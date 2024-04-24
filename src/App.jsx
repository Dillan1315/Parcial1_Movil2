import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { NavBarApp } from './components/NavBarApp'
import { EstrenosPage } from './pages/EstrenosPage'
import { MejCalPage } from './pages/MejCalPage'
import { CarteleraPage } from './pages/CarteleraPage'
import { PopularesPage } from './pages/PopularesPage'

export const App = () => {
  
  return (
    <>
      <NavBarApp/>
      <Routes>
        <Route path='/' element={<EstrenosPage/>}></Route>
        <Route path='/mejoresCalificadas' element={<MejCalPage/>}></Route>
        <Route path='/cartelera' element={<CarteleraPage/>}></Route>
        <Route path='/populares' element={<PopularesPage/>}></Route>
      </Routes>
    </>
  )
}
