import './about.css'

function About() {
  return (
    <main className="about-page">
      <h1>About LearnBuddy</h1>

      <p>
        LearnBuddy is an online learning platform designed to make
        learning simple, engaging, and accessible for students from
        Class 1 to Class 5.
      </p>

      <h2>Our Mission</h2>

      <p>
        Our mission is to help students learn better through video
        lessons, notes, practice questions, quizzes, and progress
        tracking.
      </p>

      {/* Footer Details - MOVED INSIDE THE MAIN TAG! */}
      <div className="about-footer">
        <p className="made-with-love">
          Made with ❤️ in India
        </p>
        <p className="copyright-text">
          &copy; {new Date().getFullYear()} LearnBuddy. All rights reserved.
        </p>
      </div>
      
    </main>
  )
}

export default About