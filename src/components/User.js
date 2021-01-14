import React, { useContext } from 'react'
import Image from 'next/image'
import { CgMail } from 'react-icons/cg'
import { FiPhoneCall } from 'react-icons/fi'
import styles from '../../styles/User.module.css'
import { FaArrowRight } from 'react-icons/fa'
import { Context } from './ContextProvider'

const User = ({picture, name, location, phone, email}) => {
  const { showUserProfile } = useContext(Context)
  return (
    <div className={styles.user}>
      <div>
        <Image className={styles.image} src={picture.thumbnail} 
          width="90" height="90" />
      </div>
      <div>
        <h3>{name.first} {name.last}</h3>
        <p>{location.street.number}, {location.city}, {location.state}</p>
        <div className={styles.phoneEmail}>
          <div className={styles.email}>
            <CgMail size="20" /> &nbsp;{email}
          </div>
          <div className={styles.phone}>
            <FiPhoneCall /> &nbsp;{phone}
          </div>
        </div>
      </div>
      <div onClick={() => showUserProfile(name)}>
        <FaArrowRight />
      </div>
    </div>
  )
}
  
  export default User