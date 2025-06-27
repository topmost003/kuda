import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Personal from "./pages/personal"
import Business from "./pages/Business"
import Company from "./pages/Company"
import Help from "./pages/Help"
import Header from "./components/static/Header"

function App() {

  return (
   <div>
  <BrowserRouter>
  <Header></Header>
  <Routes>
   < Route path="/" element= {<Home/> }/>
   < Route path="personal" element={<Personal/>}/>
   < Route path="business" element= {<Business/>}/>
   < Route path="company" element= {<Company/>} />
   < Route path="help" element={<Help/>} />
  </Routes>
  </BrowserRouter>
   </div>
  )
}

export default App
