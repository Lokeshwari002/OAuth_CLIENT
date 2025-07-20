import React from 'react'

function Dashboard() {
    const handleLogout=()=>{
        window.open("http://localhost:8004/auth/logout","_self")
    }


  return (
    <div>
        <h2>Welcome to Dashboard</h2>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard