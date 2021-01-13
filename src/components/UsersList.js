import React, { useContext } from 'react'
import User from './User'
import styles from '../../styles/UserList.module.css'
import { Context } from './ContextProvider'

const UsersList = _ => {
  const { users, gender, controlInput, outputInput } = useContext(Context)

const filter = (gender, users, controlInput, outputInput) =>
  controlInput && users.filter(({ name }) => 
    (name.first.toLowerCase().includes(controlInput.toLowerCase()) || name.last.toLowerCase().includes(controlInput.toLowerCase()))) ||
  outputInput && users.filter(({ name }) => 
    (name.first.toLowerCase().includes(outputInput.toLowerCase()) || name.last.toLowerCase().includes(outputInput.toLowerCase()))) ||
  gender == "male" && users.filter(({ gender }) => gender === "male") ||
  gender == "female" && users.filter(({ gender }) => gender === "female") ||
  users
  
  return( 
    <div className={styles.userList}>
      {filter(gender, users, controlInput, outputInput)
        .map(user => <User key={user.dob.date} {...user} />)}
    </div>
  )
}

export default UsersList