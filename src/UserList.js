import React from 'react';
import './UserList.css';
const UserList = (props) => (
    props.users.length ? (
      <ol className="item-list">
    	{props.users.map((user, index) => <li key={index}>{user.firstname} {user.lastname}:  {user.username} <span className={props.showGamesPlayed ? 'gamesplayed_show' : 'gamesplayed_hide'}>- Games Played: {user.gamesplayed}</span></li>)}
  	</ol>
	) : (
      <p>No users in list</p>
    )
)
export default UserList;