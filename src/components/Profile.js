import Image from 'next/image';
import React, { useContext } from 'react'
import { CgArrowLeft, CgMail } from 'react-icons/cg';
import { FiPhoneCall, FiSmartphone } from 'react-icons/fi';
import { Context } from './ContextProvider';

const Profile = ({ user }) => {
  const { setShowProfile } = useContext(Context)
  const profile = user[0]
  const {
    picture: { medium },
    name: { title, first, last },
    dob: { age },
    location: { street: { number, name }, city, state },
    email,
    registered,
    phone,
    cell
  } = profile
  
  return (
    <div>
      <div onClick={() => setShowProfile(false)}>
        <CgArrowLeft /> RESULTS
      </div>
      <div>
        <Image src={medium} width="200" height="200" />
      </div>
      <div>
        <h2>{title}. {first} {last} <span>{age}</span></h2>
        <p>{number} {name}, {city}, {state}</p>
        <p><CgMail /> {email}</p>
        <p>JOINED: {registered.date.substr(0, 10)}</p>
        <p><FiPhoneCall /> {phone}</p>
        <p><FiSmartphone /> {cell}</p>
      </div>
      
    </div>
  )
}

export default Profile