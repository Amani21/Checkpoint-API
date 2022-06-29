import React from 'react'
import { Card  } from 'react-bootstrap'

function UserCard({user}) {
  return (
    
    
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between',width:'391px',
    marginTop:'20px'}}>


          <Card style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', width: '30rem',
     marginTop:'20px', marginLeft:'30px'}}>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                <ul>
                    <li> Username :  {user.username}</li>
                    <li> Email : {user.email}</li>
                    <li> Phone :  {user.phone}</li>
                    <li> Website :  {user.website}</li>


                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        
        
    </div>

  )
}

export default UserCard