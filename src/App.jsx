import React, { Component } from 'react'
import Navbar from './Navbarcompo/Navbar'
import {Routes,Route } from 'react-router-dom'
import About from './Aboutcompo/About'
import Home from './Homecompo/Home'
import Products from './Productscompo/Products'
import ProductsDetails from './Productscompo/ProductsDetails'

export default class App extends Component {
  
  render() {
    return (
      <div>
      <Navbar/>
      
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/productdetails/:id' element={<ProductsDetails/>} />
    
      </Routes>
      </div>
    )
  }
}
