import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './index.css'
import UserContext from '../../Context/userContext';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

    const userEmail = event => {
        setEmail(event.target.value)
    }

    const userPass = event => {
        setPass(event.target.value)
    }

    const login = async () => {

        const userDetails = {email, pass}
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDetails)
        }

        const response = await fetch('http://localhost:3002/login', options)
        const data = await response.json()
        console.log(response.status)
        if (response.status === 200){
            if (data.jwtToken !== undefined){
                const {jwtToken} = data
                Cookies.set('jwtToken', jwtToken)
                navigate("/")
            }
        }
    }


    return(
        <UserContext.Consumer>
            {value => {
                const {getEmails} = value
                const logedIn = event => {
                    event.preventDefault()

                    getEmails(email)
                    console.log(email)
                    login()
                }

                return (
                    <div>
                        <div className="mainContainer" >
                            <div className='signInContainer'>
                                <h1 className='mainHeading' >Sign in</h1>
                                <p className='mainPara' >to your notes</p>
                            </div>
                            <div>
                                <form className='LoginForm' onSubmit={logedIn} >
                                    <div className='inputContainer' >
                                        <label className='label' >Email: </label>
                                        <input placeholder="Enter Your Email" type='email' className='inputField1' onChange={userEmail} value={email} />
                                    </div>
                                    <div className='inputContainer' >
                                        <label className='label' >Password: </label>
                                        <input placeholder="Enter your Password" type='password' className='inputField2' onChange={userPass} value={pass} />
                                    </div>
                                    <button type='submit' className='button' >Submit</button>
                                </form>
                                <div className='orContainer' >
                                    <hr width="42%" size="1" />
                                    <p>OR</p>
                                    <hr width="42%" size="1" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            }
            }
        </UserContext.Consumer>
    )
}

export default Login