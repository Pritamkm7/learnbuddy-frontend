import './faculty.css'
import ronitImg from './ronit.jpeg'
import pritamImg from './pritam.jpeg'
import rubinaImg from './rubina.jpeg'
import chandanImg from './chandan.jpeg'
import rajeshImg from './rajesh.jpeg'
import debulalImg from './debulal.jpeg'



function Faculty() {
  const teachers = [
    {
      name: "RONIT KUMAR ROUL", // <-- Type his real name here!
      subject: "Founder & CEO",
      qualification: "Visionary Strategist",
      image: ronitImg, // <-- Change to brotherImg later
      experience: "Project Mastermind",
      description: "The original visionary behind LearnBuddy. He conceptualized the platform to make digital learning engaging and fun for every student."
    },
    {
      name: "PRITAM KUMAR MOHANTY",
      subject: "Lead Web Developer",
      qualification: "Full Stack Developer",
      image: pritamImg, // <-- Change to pritamImg later
      experience: "3 years",
      description: "The technical architect behind LearnBuddy. Specializing in building modern, responsive, and blazing-fast user interfaces."
    },
    
    {
      name: "RUBINA BEURA", 
      subject: "Social Science",
      qualification: "Qualified TGT , Govt of Odisha",
      image: rubinaImg, 
      experience: "4+ Years",
      description: "Passionate about history and geography, bringing social sciences to life."
    },
    {
      name: "CHANDAN PRADHAN",
      subject: "Mathematics",
      qualification: "TGT Mathematics, OAVS",
      image: chandanImg, 
      experience: "3+ Years",
      description: "A dedicated educator making math fun and easy to understand for young minds."
    },
    {
      name: "RAJESH KUMAR BEURA",
      subject: "GK & Current Affairs",
      qualification: "BA GRADUATED",
      image: rajeshImg,
      experience: "1+ Years",
      description: "Passionate about history and geography, bringing social sciences to life."
    },
    {
      name: "DEBULAL DAS",
      subject: "IT & Computer Science",
      qualification: "BA GRADUATE",
      image: debulalImg,
      experience: "3+ Years",
      description: "A dedicated educator making IT concepts accessible and engaging."
    }
  ];

  return (
    <main className="faculty-page">
      <h1>Meet Our Expert Faculty</h1>
      <p>Learn from the best educators dedicated to your success.</p>
      
      <div className="faculty-container">
        {teachers.map((teacher, index) => (
          <div className="faculty-card" key={index}>
           <img src={teacher.image} alt={teacher.name} className="faculty-image" />
            <h3>{teacher.name}</h3>
            <h4>{teacher.subject}</h4>
            <p><strong>Qualification:</strong> {teacher.qualification}</p>
            <p><strong>Experience:</strong> {teacher.experience}</p>
            <p className="faculty-desc">{teacher.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Faculty