import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Dashboard from './pages/Dashboard'
import FindStartUps from './pages/FindStartUps'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="find-startups" element={<FindStartUps />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
