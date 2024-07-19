import { BiBellPlus } from "react-icons/bi";
import { IoColorPaletteOutline } from "react-icons/io5";
import Cookies from 'js-cookie'
import Navbar from '../NavBar'
import Menu from '../Menu'
import './index.css'
import { Component } from "react";

class Notes extends Component {
    state = {allData: {}}

    componentDidMount(){
        const context = this.context
        this.getData(context.emails)
    }

    getData = async emails => {
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
        console.log(jwtToken)

        if(response.ok === true){
            this.setState({allData: data, isLoading: false})
        }
    }

    render(){
        return (
            <div>
                <Navbar />
                <div className="sortedContainer" >
                    <Menu />
                    <div>
                        <div>
                            <input placeholder="Take a note..." />
                        </div>
                        <div>
                            <input />
                            <input />
                            <div>
                                <button className="buttonIcons" ><BiBellPlus /></button>
                                <button className="buttonIcons" ><IoColorPaletteOutline /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }   
}
export default Notes