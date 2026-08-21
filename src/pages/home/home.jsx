import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './home.css'

function Home() {
  const navigate = useNavigate ()
  const [selectedBoard, setSelectedBoard] = useState(null)

  const selectBoard = (board) => {
    setSelectedBoard(board)
  }

  const closePopup = () => {
    setSelectedBoard(null)
  }

  return (
    <main className="home">

      <section className="hero-section">
        <h1>Learn Smarter with LearnBuddy</h1>

        <p>
          Interactive learning for students from Class 1 to Class 5.
        </p>

        <button>Start Learning</button>
      </section>

      <section id="boards" className="board-section">
        <h2>Choose Your Board</h2>

        <p>Select your education board and start learning.</p>

        <div className="board-container">

          <div
            className="board-card"
            onClick={() => selectBoard('CBSE')}
          >
            <h3>CBSE</h3>
            <p>Central Board of Secondary Education</p>
          </div>

          <div
            className="board-card"
            onClick={() => selectBoard('ICSE')}
          >
            <h3>ICSE</h3>
            <p>Indian Certificate of Secondary Education</p>
          </div>

          <div
            className="board-card"
            onClick={() => selectBoard('CHSE')}
          >
            <h3>CHSE</h3>
            <p>Odisha Higher Secondary Education</p>
          </div>

        </div>
      </section>

      {selectedBoard && (
        <div className="popup-overlay">
          <div className="board-popup">

            <div className="success-icon">🎉</div>

            <h2>Board Selected!</h2>

            <h3>{selectedBoard}</h3>

            <p>
              Great choice! Now let's choose your class.
            </p>

            <button onClick = {() =>navigate('choose-class')}>
              Continue →
            </button>

          </div>
        </div>
      )}

    </main>
  )
}

export default Home