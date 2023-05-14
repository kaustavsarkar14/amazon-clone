import React, { useState } from 'react'
import { Link,Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import "./Login.css"

export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const login = event =>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=>{
            navigate('/')
        })
        .catch((err)=>alert(err.message))
    }

    return (
        <div className='login' >
            <Link to="/" >
                <img className='header_logo' src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png" alt="" />
            </Link>
            <form action="">
                <div className="logIn_box">
                    <h1>Sign in</h1>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}  />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <button type='submit' onClick={login} >Sign In</button>
                    <p>By continuing, you agree to <span>Amazon's Conditions</span> of Use and <span>Privacy Notice</span>.</p>
                </div>
            </form>

            <p>New to Amazon?</p>

            <Link  to='/signup'><button className='Link' >Create your Amazon account</button></Link>
        </div>
    )
}
