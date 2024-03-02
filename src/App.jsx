  import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Contact from './Components/contact/Contact'
import Product from './Components/Product/Product'
import About from './Components/About/About'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
