import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import NewFriendForm from './components/NewFriendForm';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      activeFriend: null,
      friends: []
    }
  }

  //mounts data
  componentDidMount(){
    axios
    .get("http://localhost:5000/friends")
    .then(res => this.setState({ friends: res.data}))
    .catch(err => console.log(err))
  }

  //removes friend
  removeFriend = (e, id) =>{
    e.preventDefault();
    
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => this.setState({
      friends: res.data,
    }))
    .catch(err => console.log(err))
}





  render() {
    console.log(this.state.friends)
    return (
      <div className="App">
        <header className="navigation">
          <nav>
            <div>
                <Link to='/newfriend'>Add Friend</Link>
            </div>
            <div>
                <Link to ='/'> Home </Link>
            </div>
          </nav>
        </header>
          
          {/* //Routes  */}
          <Route 
          exact 
          path='/' 
          render={props => <FriendsList {...props}
          updateFriend={this.updateFriend}
          removeFriend={this.removeFriend} 
          friends={this.state.friends} /> } 
          />
          
          <Route path='/newfriend' render={props => <NewFriendForm  {...props}
          />} 
          />

      </div>
    );
  }
}

export default App;
