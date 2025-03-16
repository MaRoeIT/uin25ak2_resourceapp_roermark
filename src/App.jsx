import { Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'

import Layout from "./components/Layout"
import Resources from './components/Resources'

function App() {
  /**
   * useState() that holds the current category.
   * default state is "html".
   */
  const [currentCategory, setCurrentCategory] = useState("html");

  return (
    <Layout currentCategory={currentCategory}>
      <Routes>
        {/** 
         * the route are set up so that if the path contains only the first path segment
         * then it will render the resources component. 
         * if the path has no segment or more than one segment it will automatically navigate to 
         * the path /html.
        */}
        <Route path='*' element={<Navigate to={"/html"}/>}/>
        <Route path='/:category' element={<Resources setCurrentCategory={setCurrentCategory} />}/>
      </Routes>
    </Layout>
  )
}

export default App
