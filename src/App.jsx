import { Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Layout from "./components/Layout"
import Resources from './components/Resources'

function App() {
  const [currentCategory, setCurrentCategory] = useState("html");

  return (
    <Layout currentCategory={currentCategory}>
      <Routes>
        <Route path='*' element={<Navigate to={"/html"}/>}/>
        <Route path='/:category' element={<Resources setCurrentCategory={setCurrentCategory} />}/>
      </Routes>
    </Layout>
  )
}

export default App
