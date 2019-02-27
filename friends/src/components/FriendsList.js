import React from 'react';

const FriendsList = props => {
        return(
            <div className='friends-list'>
                {props.friends.map(friend => {
                    return(
                    <div key={friend.id}>
                        <span>{friend.name} </span>
                        <span>{friend.age} </span>
                        <span>{friend.email}</span>
                    </div>
                    )
                })}
            </div>
     )
}


export default FriendsList;