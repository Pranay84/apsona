import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/SignUp';
import Home from './Components/Home';
import Notes from './Components/Notes'
import { Component } from 'react';
import UserContext from './Context/userContext';

class App extends Component {
  state = {emails: undefined}

  getEmails = emails => {
    this.setState({emails})
  }

  render(){
    const {emails} = this.state

    return (
      <UserContext.Provider value={{emails, getEmails: this.getEmails}} >
        <BrowserRouter>
          <Routes>
            <Route exact path='/login' Component={Login} />
            <Route exact path='/register' Component={Register} />
            <Route exact path='/' Component={Home} />
            <Route exact path='/notes' Component={Notes} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }
}

export default App;
