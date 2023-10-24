import { useState } from 'react'
import style from "./config/global-style.css"
import { Typography } from '@mui/material'
import { NavLeft } from './layout/main-layout/nav-left/nav-left'
import { Route , Routes } from 'react-router-dom'
import { MainLayout } from './layout/main-layout/main-layout'
import { Home } from './pages/home'
import { Edit } from './pages/edit/edit'
import { Post } from './pages/post/post'
import { NoPage } from './pages/no-page'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='edit' element={<Edit/>}/>
          <Route path='post' element={<Post/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Route>

      </Routes>
    <NavLeft/>
    {/* <Typography>
    </Typography> */}

    </>
  )
}

export default App
