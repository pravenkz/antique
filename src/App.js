import React from 'react'
import "./App.css"
import {  Header,About, Customization, Findus, Newsletter, Footer, NavBar } from './containers'



const App = () => {
  return (
    <div >
      <NavBar/>
    <Header/>
    <About/>
    <Customization/>
      <Findus/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
