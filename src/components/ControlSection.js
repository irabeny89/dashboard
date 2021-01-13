import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from '../../styles/ControlSection.module.css'
import { FaFemale, FaMale, FaSearch, FaUsers } from 'react-icons/fa'
import { Context } from './ContextProvider'

const ControlSection = ({ user = "Dev" }) => {
  const transform = { initialScale: "none", newScale: "scale(1.3)" }
  const { initialScale, newScale } = transform
  const [allUsersIconScale, setAllUsersIconScale] = useState(newScale)
  const [maleUsersIconScale, setMaleUsersIconScale] = useState(initialScale)
  const [femaleUsersIconScale, setFemaleUsersIconScale] = useState(initialScale)
  const allUsersIcon = useRef()
  const maleUsersIcon = useRef()
  const femaleUsersIcon = useRef()
  const {
    setOutputSectionTitle,
    setGender,
    controlInput,
    controlInputHandler
  } = useContext(Context)

  useEffect(_ => {
    allUsersIcon.current.style.transform = allUsersIconScale
    maleUsersIcon.current.style.transform = maleUsersIconScale
    femaleUsersIcon.current.style.transform = femaleUsersIconScale
  })

  const clickHandler = (title, _ref) => {
    if (_ref === allUsersIcon) {
      setGender("")
      _ref.current.style.transform = setAllUsersIconScale(newScale)
      maleUsersIcon.current.style.transform = setMaleUsersIconScale(initialScale)
      femaleUsersIcon.current.style.transform = setFemaleUsersIconScale(initialScale)
    }
    else if (_ref === maleUsersIcon) {
      setGender("male")
      _ref.current.style.transform = setMaleUsersIconScale(newScale)
      allUsersIcon.current.style.transform = setAllUsersIconScale(initialScale)
      femaleUsersIcon.current.style.transform = setFemaleUsersIconScale(initialScale)
    }
    else {
      setGender("female")
      _ref.current.style.transform = setFemaleUsersIconScale(newScale)
      maleUsersIcon.current.style.transform = setMaleUsersIconScale(initialScale)
      allUsersIcon.current.style.transform = setAllUsersIconScale(initialScale)
    }
    setOutputSectionTitle(title)
  }
  
  return (
    <div className={styles.controlSection}>
      <h1><span>Hello,</span> {user}</h1>
      <p className={styles.welcome}>
        Welcome to your dashboard, kindly sort through the user base
      </p>
      <div className={styles.inputSearch}>
        <FaSearch size="20" />
        <input value={controlInput} placeholder="Find a user"
          onChange={controlInputHandler} />
      </div>
      <h4>Show Users</h4>
      <div className={styles.options}>
        <div onClick={() => clickHandler("All Users", allUsersIcon)}>
          <div ref={allUsersIcon} className={styles.allUsersIcon}><FaUsers size="40" /></div>
          <p>All Users</p>
        </div>
        <div onClick={() => clickHandler("Male Users", maleUsersIcon)}>
          <div ref={maleUsersIcon} className={styles.maleUsersIcon}><FaMale size="40" /></div>
          <p>Male Users</p>
        </div>
        <div onClick={() => clickHandler("Female Users", femaleUsersIcon)}>
          <div ref={femaleUsersIcon} className={styles.femaleUsersIcon}>
            <FaFemale size="40" />
          </div>
          <p>Female Users</p>
        </div>
      </div>
    </div>
  )
}

export default ControlSection