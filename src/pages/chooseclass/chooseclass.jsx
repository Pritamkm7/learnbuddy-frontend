import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './chooseclass.css'

function ChooseClass() {
  const navigate = useNavigate()
  const [selectedClass , setSelectedClass] = useState(null)
  const selectClass = (studentClass) => {
   setSelectedClass(studentClass)
  }
  return (
    <main className="choose-class">
      <h1>Choose Your Class</h1>

      <p>Select your class to continue learning.</p>

      <div className="class-container">
        
        <div className="class-card"
             onClick={() => selectClass('Class 1')}>
              Class 1
             </div>
        <div className="class-card"
             onClick={() =>  selectClass('Class 2')}>
              Class 2
              </div>
        <div className="class-card"
             onClick={() => selectClass('Class 3')}>
              Class 3
              </div>
        <div className="class-card"
             onClick={() => selectClass('Class 4')}>
              Class 4
              </div>
        <div className="class-card"
             onClick= {() => selectClass('Class 5')}>
              Class 5
              </div>
      </div>
            {selectedClass && (
        <div className="class-popup-overlay">
          <div className="class-popup">
            <div className="success-icon">🎉</div>

            <h2>Class Selected!</h2>

            <h3>{selectedClass}</h3>

            <p>
              Great! Now let's choose your subject.
            </p>

          <button onClick={() => navigate('/choose-subject', { state: { className: selectedClass } })}>
              Continue →
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default ChooseClass