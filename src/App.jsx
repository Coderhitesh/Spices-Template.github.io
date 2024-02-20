  import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Hero />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
