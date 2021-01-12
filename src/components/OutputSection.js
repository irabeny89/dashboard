import React, { useContext } from 'react'
import styles from '../../styles/OutputSection.module.css'
import { FaCloudDownloadAlt, FaSearch } from 'react-icons/fa'
import { Context } from './ContextProvider'
import CountrySelection from './CountrySelection'
import UsersList from './UsersList'
import CountryToggle from './CountryToggle'

const OutputSection = _ => {
  const { selectedUser } = useContext(Context)
  return (
    <div className={styles.outputSection}>
      <h2>{selectedUser}</h2>
      <p>Filter by</p>
      <div className={styles.inputs}>
        <div className={styles.searchBar}>
          <FaSearch size="14" color="grey" />
          <input placeholder="Find in list" />
        </div>
        <div className={styles.countrySelect}>
          <CountrySelection />
        </div>
        <CountryToggle />
      </div>
      <UsersList />
      <div className={styles.downloadPagination}>
        <div>
          <button>
            <FaCloudDownloadAlt /> Download results
          </button>
        </div>
        <div className={styles.pagination}>
          <p>&lt;</p><p>&gt;</p>
        </div>
      </div>
    </div>
  )
}

export default OutputSection