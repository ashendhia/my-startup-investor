import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from './pages/SharedLayout'
import Dashboard from './pages/Dashboard'
import StartUps from './pages/StartUps'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="find-startups" element={<StartUps />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
