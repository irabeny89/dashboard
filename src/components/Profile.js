import Image from 'next/image';
import React, { useContext } from 'react'
import { CgArrowLeft, CgMail } from 'react-icons/cg';
import { FiPhoneCall, FiSmartphone } from 'react-icons/fi';
import { Context } from './ContextProvider';
import styles from '../../styles/Profile.module.css'

const Profile = ({ user }) => {
  const { setShowProfile } = useContext(Context)
  const profile = user[0]
  const {
    picture: { large },
    name: { title, first, last },
    dob: { age },
    location: { street: { number, name }, city, state },
    email,
    registered,
    phone,
    cell
  } = profile
  
  return (
    <div className={styles.profile}>
      <div onClick={() => setShowProfile(false)} className={styles.back}>
        <CgArrowLeft color="#30bbb5" size="35" /> &nbsp;&nbsp;RESULTS
      </div>
      <div className={styles.details}>
        <div className={styles.imageDiv}>
          <Image className={styles.image} src={large} width="200"
            height="200" />
        </div>
        <div>
          <h2>{title}. {first} {last} <span>{age}</span></h2>
          <p>{number} {name}, {city}, {state}</p>
          <p className={styles.email}><CgMail /> {email}</p>
          <p className={styles.joined}>JOINED: {registered.date.substr(0, 10)}</p>
          <p><FiPhoneCall /> {phone}</p>
          <p><FiSmartphone /> {cell}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile