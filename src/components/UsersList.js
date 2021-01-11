import React from 'react'
import User from './User'
import styles from '../../styles/UserList.module.css'

const UsersList = _ => {
  const users = [
    {
      thumbnail: "/favicon.ico",
      name: { first: "shalom", last: "gibson" },
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
      },
      email: "brad.gibson@example.com",
      phone: "011-962-7516"
    },
    {
      thumbnail: "/favicon.ico",
      name: { first: "shalom", last: "gibson" },
      location: {
        street: "9278 new road",
        city: "kilcoole",
        state: "waterford",
      },
      email: "brad.gibson@example.com",
      phone: "011-962-7516"
    }
  ]
  return (
    <div className={styles.userList}>
      {users.map(user => <div key={user.phone}><User {...user} /></div>)}
    </div>
  )
}

export default UsersList