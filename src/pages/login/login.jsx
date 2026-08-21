import { Link } from 'react-router-dom'

function Login() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fffde7', padding: '100px 20px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', width: '100%', maxWidth: '400px', marginTop: '40px' }}>
        
        <h2 style={{ color: '#1e3a8a', fontSize: '32px', marginBottom: '10px', textAlign: 'center' }}>Welcome Back</h2>
        <p style={{ color: '#555', textAlign: 'center', marginBottom: '30px' }}>Login to your LearnBuddy account</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="email" placeholder="Email Address" style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} />
          <input type="password" placeholder="Password" style={{ padding: '12px 15px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' }} />
          
          <button style={{ background: '#2563eb', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '18px', cursor: 'pointer', fontWeight: 'bold' }}>
            Login
          </button>
        </div>

        <p style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
          Don't have an account? <Link to="/register" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none' }}>Register</Link>
        </p>

      </div>
    </main>
  )
}

export default Login