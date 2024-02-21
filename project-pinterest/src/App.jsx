import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import LoginPages from './pages/login'
import CrearPages from './pages/crear'



function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPages/>} />
      <Route path='/crear' element={<CrearPages/>}/>
    </Routes>
    </BrowserRouter>
    
  </>
  )
}

export default App;
