import About from './pages/about/about'
import  {Routes , Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import ChooseClass from './pages/chooseclass/chooseclass'
import Faculty from './pages/faculty/faculty'
import ChooseSubject from './pages/choosesubject/choosesubject'
import Store from './pages/store/store'
import Support from './pages/support/support'
import Profile from './pages/profile/profile'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Courses from './pages/courses/courses'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/choose-class" element = {<ChooseClass/>} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/choose-subject" element={<ChooseSubject />} />
        <Route path="/store" element={<Store />} />
        <Route path="/support" element={<Support />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} /> 


      </Routes>
    </>
  )
}

export default App