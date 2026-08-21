import { useNavigate } from 'react-router-dom'
function Profile() {
  const navigate = useNavigate()
  return (
    <main style={{ 
      minHeight: '100vh', 
      backgroundColor: '#fffde7', 
      padding: '100px 20px', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'flex-start' 
    }}>
      
      <div style={{ 
        background: 'white', 
        padding: '50px 30px', 
        borderRadius: '16px', 
        border: '1px solid #e5e7eb',
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%',
        marginTop: '40px'
      }}>
        
        {/* A simple placeholder avatar icon */}
        <div style={{ fontSize: '70px', marginBottom: '15px' }}>👤</div>
        
        <h2 style={{ color: '#1e3a8a', fontSize: '32px', marginBottom: '15px' }}>My Profile</h2>
        
        <p style={{ color: '#555', fontSize: '18px', marginBottom: '35px', lineHeight: '1.5' }}>
          Please login to view your personal student dashboard, track your learning progress, and manage your account.
        </p>
        
        <button 
          onClick={() => navigate('/login')}
          style={{ 
          background: '#2563eb', 
          color: 'white', 
          border: 'none', 
          padding: '14px 32px', 
          borderRadius: '8px', 
          fontSize: '18px', 
          cursor: 'pointer',
          fontWeight: 'bold',
          width: '100%'
        }}>
          Login Now
        </button>
        
      </div>
      
    </main>
  )
}

export default Profile