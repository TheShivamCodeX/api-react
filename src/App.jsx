import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Header , Footer } from './components/HeaderFooter'
import Joke from './pages/Joke'
import Weather from './pages/Weather'


function App() {

  return (
    <>
    <Header/>
    {/* <Joke/> */}
    <Weather/>
    <Footer/>
    </>
  )
}

export default App
