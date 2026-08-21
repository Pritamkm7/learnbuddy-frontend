import './faculty.css'
import chandanImg from './chandan.jpeg'
import rubinaImg from './rubina.jpeg'

function Faculty() {
  const teachers = [
    {
      name: "CHANDAN PRADHAN", // Replace with your friend's name
      subject: "Mathematics",
      qualification: "TGT Mathematics Qualified",
      image: chandanImg , 
      experience: "5+ Years",
      description: "A dedicated educator making math fun and easy to understand for young minds."
    },
    {
      name: "RUBINA BEURA", // Replace with your relative's name
      subject: "Social Science",
      qualification: "Qualified TGT SSC",
      image : rubinaImg ,
      experience: "4+ Years",
      description: "Passionate about history and geography, bringing social sciences to life."
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