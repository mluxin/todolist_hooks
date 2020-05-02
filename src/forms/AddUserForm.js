import React, { useState } from 'react'

const AddUserForm = props => {
  return (
    <form>
      <label>What ?</label>
      <input type="text" name="name" value="" />

      <label>Write more</label>
      <input type="text" name="username" value="" />

      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm