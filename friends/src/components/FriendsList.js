import React from 'react';
import '../App.css'

const FriendsList = props => {
        return(
            <div className='friends-list'>
                {props.friends.map(friend => {
                    return(
                    <div className='friend-content' key={friend.id}>
                        <span><strong>Name: </strong>{friend.name} </span>
                        <span><strong>Age: </strong>{friend.age} </span>
                        <span><strong>Email: </strong>{friend.email}</span>
                        <button onClick={e => props.removeFriend(e, friend.id)}>remove friend</button>
                        <button onClick={props.updateFriend}>Edit</button>
                    </div>
                    )
                })}
            </div>
     )
}


export default FriendsList;