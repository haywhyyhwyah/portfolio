import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import About from './components/About'
import Footer from './components/Footer'
import Stacks from './components/Stacks'
import Contacts from './components/Contacts'

function App() {
    return(
        <>
            <Navbar/>
            <Herosection/>
            <About/>
            <Stacks/>
            <Contacts/>
            <Footer/>
        </>
    )
}

export default App
