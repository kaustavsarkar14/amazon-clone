import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='login' >
            <Link to="/" >
                <img className='header_logo' src="https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png" alt="" />
            </Link>
        </div>
    )
}
