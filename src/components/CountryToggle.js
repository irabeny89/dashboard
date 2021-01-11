import React, { useContext, useRef, useState } from 'react'
import styles from '../../styles/CountryToggle.module.css'
import { Context } from './ContextProvider'

const CountryToggle = _ => {
  const [flag, setFlag] = useState("Show")
  const toggleRef = useRef()
  const { setCountryEnable } = useContext(Context)

  const toggleFlag = _ => {
    switch (flag) {
      case "Show":
        setCountryEnable("disabled")
        setFlag("Hide")
        toggleRef.current.style.position = "static"
        break;
      case "Hide":
        setCountryEnable("")
        setFlag("Show")
        toggleRef.current.style.position = "relative"
      default:
        break;
    }

  }
  return (
    <div className={styles.countryToggle}>
      <div onClick={toggleFlag}
        className={styles.toggle}>
        <div ref={toggleRef}></div><p>{flag} Country</p>
      </div>
    </div>
  )
}

export default CountryToggle