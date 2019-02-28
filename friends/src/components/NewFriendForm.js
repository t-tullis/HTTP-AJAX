import React from 'react'
import axios from 'axios';
import '../App.css'


class NewFriendForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            newFriend: {
                name: '',
                age: '',
                email: ''
              }
        }
    }

    addNewFriend = () =>{
        axios.post('http://localhost:5000/friends', this.state.newFriend)
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    //update friend
//     updateFriend = (e, id) =>{
//     e.preventDefault();
  
//     axios
//     .put(`http://localhost:5000/friends/${id}`, this.state.newFriend )
//     .then(res => this.setState({
//       friends: res.data,
//       newfriend: {
//           ...this.state.newFriend,
//           name: '',
//           age: '',
//           email: ''      
//         }
//     }))
//     .catch(err => console.log(err))
//   }

    
    handleChange = e => {
        let value = e.target.value;
        if (e.target.name === 'age') {
          value = parseInt(value, 10);
        }

        this.setState({
          newFriend: {
            ...this.state.newFriend,
            [e.target.name]: value,
          }
        });
      };
  


    render(){
        return(
            <div className='newfriend-form'>
                <form>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            onChange={this.handleChange}
                            value={this.state.newFriend.name}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            onChange={this.handleChange}
                            value={this.state.newFriend.age}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={this.handleChange}
                            value={this.state.newFriend.email}
                        />
                    </div>
                    <button onClick={this.addNewFriend} type='submit'>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default NewFriendForm;