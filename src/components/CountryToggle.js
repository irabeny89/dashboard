import React, { useContext, useRef, useState } from 'react'
import styles from '../../styles/CountryToggle.module.css'
import { Context } from './ContextProvider'

const CountryToggle = _ => {
  const [flag, setFlag] = useState("Hide")
  const toggleRef = useRef()
  const { setCountryEnable } = useContext(Context)

  const toggleFlag = _ => {
    switch (flag) {
      case "Show":
        setCountryEnable("")
        setFlag("Hide")
        toggleRef.current.style.position = "relative"
        break;
      case "Hide":
        setCountryEnable("disabled")
        setFlag("Show")
        toggleRef.current.style.position = "static"
      default:
        break;
    }

  }
  return (
    <div onClick={toggleFlag} className={styles.countryToggle}>
      <div className={styles.toggleBg}>
        <div ref={toggleRef} className={styles.toggle}>
        </div>
      </div>
      <p>&nbsp;{flag} Country</p>
    </div>
  )
}

export default CountryToggle