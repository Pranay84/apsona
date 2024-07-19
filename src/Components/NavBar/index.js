import Cookies from 'js-cookie'
import { CiSearch } from "react-icons/ci";
import './index.css'
import { Component } from 'react';
import UserContext from '../../Context/userContext';

class Navbar extends Component{
    static contextType = UserContext

    constructor(props) {
        super(props);
        //Let's declare an empty profile state here.
        this.state = {
            allData: [],
            isLoading: true
        };
      }

    componentDidMount(){
        const context = this.context
        console.log(context.emails)
        this.getDetails(context.emails)
    }

    getDetails = async emails => {
        console.log(emails)
        const jwtToken = Cookies.get('jwtToken')

        const url = 'http://localhost:3002/getData'
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${emails} ${jwtToken}`,
              }
        }

        const response = await fetch(url, options)
        const data = await response.json()
        // console.log(data)

        if(response.ok === true){
            this.setState({allData: data, isLoading: false})
        }
    }

    render(){

        return(
            <div className="navContainer" >
                <div>
                    <h1>Notes</h1>
                </div>
                <div className="searchContainer" >
                    <CiSearch className="searchIcon" />
                    <input className="searchBar" type='search' placeholder="Search..." />
                </div>
                <p>Profile</p>
            </div>
        )
    }
}

export default Navbar