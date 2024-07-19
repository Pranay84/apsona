import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import Navbar from '../NavBar'
import Menu from '../Menu'

const Home = () => {
    const navigate = useNavigate()

    const jwtToken = Cookies.get('jwtToken')
    if (jwtToken === undefined){
        navigate("/login")
    }

    return(
        <div>
            <Navbar />
            <div>
                <Menu />
            </div>
        </div>
        
    )
}

export default Home