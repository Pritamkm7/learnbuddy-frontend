import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  const navigate = useNavigate()
  // 1. Memory for the sidebar goes inside the Navbar function!
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  // 2. We use <> to wrap the nav AND the new sidebar together
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          LearnBuddy
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link> 
          <Link to="/faculty">Faculty</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="navbar-actions">
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="signup-btn" onClick={() => navigate('/register')}>Get Started</button>
          
          {/* 3. The clickable menu icon */}
          <button className="menu-icon" onClick={toggleSidebar}>☰</button>
        </div>
      </nav>

      {/* 4. The dark background that appears behind the open sidebar */}
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      {/* 5. The actual sliding sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>×</button>
        
        <div className="sidebar-menu">
         <div className="sidebar-menu">
          <Link to="/profile" onClick={toggleSidebar}>My Profile</Link>
          <Link to="/store" onClick={toggleSidebar}>LB Store</Link>
          <Link to="/support" onClick={toggleSidebar}>Support</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Navbar