function Support() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fffde7', padding: '80px 20px', textAlign: 'center' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '42px', marginBottom: '20px' }}>Help & Support</h1>
      <p style={{ color: '#555', fontSize: '20px', marginBottom: '40px' }}>We are here to help you learn better!</p>
      
      <div style={{ background: 'white', padding: '40px', borderRadius: '12px', maxWidth: '500px', margin: '0 auto', border: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>Contact Us</h2>
        <div style={{ fontSize: '18px', color: '#555', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <p><strong>Email:</strong> support@learnbuddy.in</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Hours:</strong> Mon - Fri, 9 AM to 5 PM</p>
        </div>
      </div>
    </main>
  )
}

export default Support