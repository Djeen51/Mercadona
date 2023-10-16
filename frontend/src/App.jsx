import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Homepage from './pages/HomePage'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import Register from './pages/Register'





function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route index element ={<Homepage/>} />
          <Route path="catalogue" element={<Products />} />
          <Route path='catalogue/:id' element={<ProductPage />} />
          <Route path='login' element={<Login/>} />
          <Route path='register' element={<Register/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
