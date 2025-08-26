import HomePage from './pages/HomePage'
import { Header } from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartPage } from './pages/Cart'
import Success from './modules/cart/components/success'


const App = () => {
  return (

    <Router >
      <Header />
      <main className="container mx-auto px-4 py-8">

        <Routes >
          <Route path='/' element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<Success />} />

        </Routes>
      </main>
    </Router>

  )
}

export default App
