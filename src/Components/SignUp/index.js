import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './index.css'

const Register = () => {
    const [email, setEmail] = useState('')
    const [username, setUser] = useState('')
    const [password, setPass] = useState('')
    const [confirm, setConfirm] = useState('')
    const [number, setNumb] = useState('')
    const [msg, setMsg] = useState('')

    const navigate = useNavigate()

    const userEmail = (event) => {
        setEmail(event.target.value)
    }

    const userName = (event) => {
        setUser(event.target.value)
    }

    const userPass = (event) => {
        setPass(event.target.value)
    }

    const confirmPass = (event) => {
        setConfirm(event.target.value)
    }

    const userNumber = (event) => {
        setNumb(event.target.value)
    }

    const regist = async event => {
        event.preventDefault()

        const userDetails = {
            email,
            username,
            password,
            number
        }

        console.log(userDetails)

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails)
        }

        const response = await fetch('http://localhost:3002/register', options)
        const data = await response.text()
        setMsg(data)
        validate(data)
        console.log(data)
    }

    const validate = (data) => {
        console.log(msg)
        if (data === 'User Added'){
            navigate("/login")
        }
    }

    return (
       <div>
            <div className="mainSignUpContainer" >
                <div className='signUpContainer' >
                    <h1 className='mainHeading' >Sign Up</h1>
                    <p className='mainPara' >to your notes</p>
                </div>
                    <form className='LoginForm' onSubmit={regist} >
                        <div className='inputContainer' >
                            <label className='label' >Email: </label>
                            <input placeholder="Enter your Email"  className='signupField1' onChange={userEmail} value={email} />
                        </div>
                        <div className='inputContainer' >
                            <label className='label' >Username: </label>
                            <input placeholder="Enter your username"  className='signupField5' onChange={userName} value={username} />
                        </div>
                        <div className='inputContainer' >
                            <label className='label' >Password: </label>
                            <input placeholder="Enter a Password" className='signupField2' type='password' onChange={userPass} value={password} />
                        </div>
                        <div className='inputContainer' >
                            <label className='label' >Confirm Password: </label>
                            <input placeholder="Confirm your Password" className='signupField3' type='password' onChange={confirmPass} value={confirm} />
                        </div>
                        <div className='inputContainer' >
                            <label className='label' >Ph.Number: </label>
                            <input placeholder="Enter your mobile number" className='signupField4' onChange={userNumber} value={number} />
                        </div>
                        <button className='signUpButton' type='submit' >Sign Up</button>
                    </form>
            </div>
       </div>
    )
}

export default Register