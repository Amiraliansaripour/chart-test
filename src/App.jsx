import './App.css'
import StaticChart from './staticChart/StaticChart'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Lists from './Lists'
function App() {

 

  return (
    <>
      <div className="app">
      </div>
        <Router>
          <Routes>
            <Route path='/' element={<Lists/>} />
            <Route path='/bitcoin' element={<StaticChart />} />
          </Routes>

        </Router>
    </>
  )
}

export default App
