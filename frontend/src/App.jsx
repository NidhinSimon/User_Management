import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './components/UserList'
import {NextUIProvider} from '@nextui-org/react'
import UserAdd from './components/Users/UserAdd'
import { BrowserRouter,Route,Routes } from 'react-router-dom'



function App() {
 

  return (
    <>
    <BrowserRouter>
  
<NextUIProvider>

  <Routes>
    

    <Route path='/userAdd' element={<UserAdd/>}/>
    <Route path='/' element={<UserList/>}/>

  

  </Routes>
    </NextUIProvider>
    </BrowserRouter>
    </>
  )
}

export default App
