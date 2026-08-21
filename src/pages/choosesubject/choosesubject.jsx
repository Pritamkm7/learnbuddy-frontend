import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './choosesubject.css'

function ChooseSubject() {
  const location = useLocation()
  // This grabs the class they picked on the last page. If they came here directly, it defaults to 'Unknown Class'
  const userClass = location.state?.className || 'Unknown Class'
  
  const [selectedSubject, setSelectedSubject] = useState(null)
  
  // Here is where the magic happens! We define different subjects for different classes.
  // You can easily edit these lists to perfectly match your real curriculum.
  const subjectDatabase = {
    "Class 1": ["Basic Math", "English", "EVS", "Art & Craft"],
    "Class 2": ["Basic Math", "English", "EVS", "Computer Basics"],
    "Class 8": ["Mathematics", "Science", "History", "Geography", "English Literature"],
    "Class 10": ["Algebra", "Physics", "Chemistry", "Biology", "Civics"],
  }

  // This tells React: "Look up the subjects for their class. If you don't find it in the database, just show these default ones."
  const subjects = subjectDatabase[userClass] || ['Mathematics', 'Science', 'English', 'Social Studies']

  const selectSubject = (subject) => {
    setSelectedSubject(subject)
  }

  return (
    <main className="choose-subject">
      <h1>Choose Your Subject</h1>
      <p>Subjects for <strong>{userClass}</strong></p>

      <div className="subject-container">
        {subjects.map((subject, index) => (
          <div 
            key={index} 
            className="subject-card"
            onClick={() => selectSubject(subject)}
          >
            {subject}
          </div>
        ))}
      </div>

      {selectedSubject && (
        <div className="subject-popup-overlay">
          <div className="subject-popup">
            <div className="success-icon">📚</div>
            <h2>Subject Selected!</h2>
            <h3>{selectedSubject}</h3>
            <p>Ready to start learning?</p>
            <button>Start Learning →</button>
          </div>
        </div>
      )}
    </main>
  )
}

export default ChooseSubject