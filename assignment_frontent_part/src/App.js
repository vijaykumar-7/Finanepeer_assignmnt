import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import PrivateComponent from './components/PrivateComponent'
import Login from './components/Login'
import ProductList from './components/ProductList'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>

        <Route element={<PrivateComponent />} >
          <Route path="/" element={<ProductList />} />
          <Route path="/logout" element={<h1>Logout Product listing components</h1>} />
        </Route>

        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
