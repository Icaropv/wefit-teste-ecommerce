import React from 'react'
import HomePage from './pages/HomePage'
import { Header } from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartPage } from './pages/Cart'
import Success from './modules/cart/components/success'


const App = () => {
  return (

    <Router >
      <Header/>

      <Routes >
        <Route path='/' element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/success" element={<Success />}/>
     
      </Routes>
    </Router>

  )
}

export default App
