import React from 'react'
import Layout from './component/Layout'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductCart from './component/ProductCart'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/:slug' element={<Detail/>}/>
        <Route path='/:product' element={<ProductCart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App