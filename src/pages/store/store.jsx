function Store() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#fffde7', padding: '80px 20px', textAlign: 'center' }}>
      <h1 style={{ color: '#1e3a8a', fontSize: '42px', marginBottom: '20px' }}>LearnBuddy Store</h1>
      <p style={{ color: '#555', fontSize: '20px', margin: '0 auto 40px', maxWidth: '600px' }}>
        Get ready for the new school year! Exclusive study materials and merchandise.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '250px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ color: '#2563eb', fontSize: '24px', marginBottom: '10px' }}>Notebooks</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>High-quality ruled notebooks for daily practice.</p>
          <button style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>Buy Now</button>
        </div>

        <div style={{ background: 'white', padding: '30px', borderRadius: '12px', width: '250px', border: '1px solid #e5e7eb' }}>
          <h3 style={{ color: '#2563eb', fontSize: '24px', marginBottom: '10px' }}>Backpacks</h3>
          <p style={{ color: '#666', marginBottom: '20px' }}>Ergonomic school bags with LearnBuddy logo.</p>
          <button style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}>Buy Now</button>
        </div>
      </div>
    </main>
  )
}

export default Store