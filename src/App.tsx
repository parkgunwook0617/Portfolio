import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Projects from './components/Projects'
import History from './components/History'
import './styling/index.css'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Skills></Skills>
      <Projects></Projects>
      <History></History>
    </div>
  )
}

export default App
