import React, { useContext } from 'react'
import User from './User'
import styles from '../../styles/UserList.module.css'
import { Context } from './ContextProvider'
import { filter } from '../utils/filter'

const UsersList = _ => {
  const { users, gender, error, input } = useContext(Context)
  
  return( 
    <div className={styles.userList}>
      {filter(gender, users, input)
        .map(user => <User key={user.dob.date} {...user} />)}
    </div>
  )
}

export default UsersList