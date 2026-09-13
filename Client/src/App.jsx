import { useState } from 'react'
import Home from './Pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Pages/login/Login'
import List from './Pages/list/list'
import Single from './Pages/single/Single'
import New from './Pages/new/New'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New />} />

            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productID" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>


          </Route>

        </Routes>
      </BrowserRouter>


    </div>


  )
}

export default App
