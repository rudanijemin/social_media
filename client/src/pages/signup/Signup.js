import React from 'react'
import { Link } from 'react-router-dom';
import './Signup.scss';

function Signup() {
  return (
    <div className="Signup">
    <div className="signup-box">
        <h2 className="heading">Signup</h2>
        <form >
            <label htmlFor="name">Name</label>
            <input
                type="text"
                className="name"
                id="name"
                // onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                className="email"
                id="email"
                // onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                className="password"
                id="password"
                // onChange={(e) => setPassword(e.target.value)}
            />

            <input type="submit" className="submit" />
        </form>
        <p className="subheading">
            Already have an account? <Link to="/login">Log In</Link>
        </p>
    </div>
</div>
  )
}

export default Signup;