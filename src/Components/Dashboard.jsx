import React from 'react'

function Dashboard() {
    const handleLogout=()=>{
        window.open("https://oauth-udsd.onrender.com//auth/logout","_self")
    }


  return (
    <div>
        <h2>Welcome to Dashboard</h2>
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard