import React from 'react'
import styles from '../../styles/DisplaySection.module.css'

const DisplaySection = ({selection='Selected Users'}) => 
  <div className={styles.displaysection}>
    <h1>{selection}</h1>
    <p>Filter by</p>
    <div>
      <input /><input /><input />
    </div>
    <div>users components</div>
    <div>
      <button>Download results</button>
      <div><p>&lt;</p><p>&gt;</p></div>
    </div>

    <h1>{selection}</h1>
    <p>Filter by</p>
    <div>
      <input /><input /><input />
    </div>
    <div>users components</div>
    <div>
      <button>Download results</button>
      <div><p>&lt;</p><p>&gt;</p></div>
    </div>
  </div>

export default DisplaySection