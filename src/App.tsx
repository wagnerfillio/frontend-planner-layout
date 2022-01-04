import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Layout } from './Layout'
import { NotFound } from './Pages/NotFound'
import { Home } from './Pages/Home'
import { Users } from './Pages/Users'

function App() {
  useEffect(() => {
    document.title = 'App Layout'
  }, [])

  return (
	<Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='Users' element={<Users />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
