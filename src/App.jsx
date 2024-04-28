
import Navbar from './components/Navbar/navbar'
import Home from './components/Home/Home'
import Course from './components/Course/Course'
import About from './components/About/About'
import Cards from './components/Cards/cards'
import Contact from './components/Contact/Contact'
import Title from './components/Title/Title'
import Footer from './components/Footer/footer'


function App() {
 

  return (
  <div>
    <Navbar/>
    <Home/>
    <div className='container'>
    <Title subtitle='Our Courses'  title='Our College Branches'/>
    <Course/>
    </div>
    <div className='container'>
    <Title subtitle='About Us'  title='Anna University nagercoil'/>
    <About/>
    </div>
    <div className='container'>
    <Title subtitle='Gallery'  title='The College Picture'/>
    <Cards/>
    </div>
    <div className='container'>
    <Title  title='Contact Us'/>
    <Contact/>
    </div>
    <Footer/>
  </div>
  )
}

export default App
