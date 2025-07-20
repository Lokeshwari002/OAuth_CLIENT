import React from 'react'

function Login() {
    const handleGoogleLogin=()=>{
        window.open("https://oauth-udsd.onrender.com//auth/google","_self")
    }




  return (
    <div>
        <h2>Login Page</h2>
        <p>welcome User</p>
        <button onClick={handleGoogleLogin}>Login with Google</button>
    </div>
  )
}

export default Login