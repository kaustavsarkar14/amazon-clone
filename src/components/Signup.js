import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { useStateValue } from '../StateProvider'

export default function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [{user}, dispatch] = useStateValue()
    
    const createAccount = (event)=>{
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then(
            navigate("/login")
            )
            .catch((err)=>console.log(err.message))
            
            localStorage.setItem('name',name)
    }
   

  return (
    <div className='login' >
            <Link to="/" >
                <img className='header_logo' src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png" alt="" />
            </Link>
            <form action="">
                <div className="logIn_box">
                    <h1>Sign in</h1>
                    <h5>Your name</h5>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)}  />
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}  />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type='submit' onClick={createAccount} >Create Account</button>
                    <p>By continuing, you agree to <span>Amazon's Conditions</span> of Use and <span>Privacy Notice</span>.</p>
                </div>
            </form>

            <p>New to Amazon?</p>

        </div>
  )
}
