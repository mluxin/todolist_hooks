import React, { useState }from 'react';
import './index.css';

import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'


const App = () => {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  // Tke a user object as a parameter +  add them to the users array of objects (manually ID incrementation)
  // The "...users" code ensures that all the previous users remain in the array.
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>To Do List</h1>

      <div className="flex-row">

        <div className="flex-large">
          <h2>Add a thing to do</h2>
        </div>
        <AddUserForm addUser={addUser} />

        <div className="flex-large">
          <h2>What do you have to do ?</h2>
          <UserTable users={users} />
        </div>

      </div>
    </div>
  )
}

export default App