
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='max-w-5xl mx-auto'>
      <Navbar/>
      <div className="h-[68px]"></div>
      <Outlet/>
    </div>
  )
}

export default App
