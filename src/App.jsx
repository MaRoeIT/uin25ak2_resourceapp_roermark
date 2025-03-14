import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Layout from "./components/Layout"
import Resources from './components/Resources'
import { useEffect, useState } from 'react'

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
