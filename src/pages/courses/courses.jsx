import { useNavigate } from 'react-router-dom'
import './courses.css'

function Courses() {
  const navigate = useNavigate()

  return (
    <main className="courses-container">
      <h1 className="courses-title">Select Your Class</h1>
      <p className="courses-subtitle">
        Choose your grade to see available subjects and chapters.
      </p>
      
      <div className="courses-grid">
        
        <div onClick={() => navigate('/subjects')} className="course-card">
          <div className="course-icon">🎒</div>
          <h3 className="course-card-title">Class 1</h3>
          <p className="course-card-desc">Start your learning journey.</p>
        </div>

        <div onClick={() => navigate('/subjects')} className="course-card">
          <div className="course-icon">🖍️</div>
          <h3 className="course-card-title">Class 2</h3>
          <p className="course-card-desc">Build your core basics.</p>
        </div>

        <div onClick={() => navigate('/subjects')} className="course-card">
          <div className="course-icon">📖</div>
          <h3 className="course-card-title">Class 3</h3>
          <p className="course-card-desc">Learn new and exciting concepts.</p>
        </div>

        <div onClick={() => navigate('/subjects')} className="course-card">
          <div className="course-icon">📐</div>
          <h3 className="course-card-title">Class 4</h3>
          <p className="course-card-desc">Expand your knowledge.</p>
        </div>

        <div onClick={() => navigate('/subjects')} className="course-card">
          <div className="course-icon">🎓</div>
          <h3 className="course-card-title">Class 5</h3>
          <p className="course-card-desc">Master your elementary skills.</p>
        </div>

      </div>
    </main>
  )
}

export default Courses