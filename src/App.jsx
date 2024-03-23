import './App.css'
import StaticChart from './staticChart/StaticChart'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Lists from './Lists'
import { route } from './route'
function App() {

 

  return (
    <>
      <div className="app">
      </div>
        <Router>
          <Routes>
            {
              route.map((r,index) =>{
                return(
                  <Route key={index} path={r.path} element={r.component} />
                )
              })
            }
           

          </Routes>

        </Router>
    </>
  )
}

export default App
