import React, { useState } from 'react'
import styles from '../../styles/OutputSection.module.css'
import { FaCloudDownloadAlt, FaSearch } from 'react-icons/fa'

const OutputSection = _ => {
  const [selectedUser, setSelectedUser] = useState("All Users")
  return(
    <div className={styles.outputSection}>
      <h2>{selectedUser}</h2>
      <p>Filter by</p>
      <div className={styles.inputs}>
      <div className={styles.searchBar}>
      <FaSearch size="20" color="grey" />
      <input placeholder="Find in list" />
      </div>
      <div className={styles.countrySelect}>
      <select>
      <option>Country</option>
      <option>Nigeria</option>
      </select>
      </div>
      <div><input type="checkbox" /></div>
      </div>
      <div>users components</div>
      <div className={styles.dlPagination}>
      <button><FaCloudDownloadAlt /> Download results</button>
      <div className={styles.pagination}>
      <p>&lt;</p><p>&gt;</p>
      </div>
      </div>
    </div>
  )
}

export default OutputSection