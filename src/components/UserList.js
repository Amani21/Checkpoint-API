import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

function UserList() {
const [users, setusers] = useState([])

useEffect(() => {
  
try {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res)=> setusers(res.data));

} catch (error) {
    console.log(error)
}
}, [])


  return (
    <div style={{justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap'}} >
        {users.map((el)=> <UserCard user={el}/> )}
    </div>
  )
}

export default UserList