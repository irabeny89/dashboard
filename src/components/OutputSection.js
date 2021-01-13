import React, { useContext } from 'react'
import styles from '../../styles/OutputSection.module.css'
import { FaCloudDownloadAlt, FaSearch } from 'react-icons/fa'
import { Context } from './ContextProvider'
import CountrySelection from './CountrySelection'
import UsersList from './UsersList'
import CountryToggle from './CountryToggle'

const OutputSection = ({ allUsers }) => {
  const {
    selectedUser,
    users,
    paginate,
    setPage,
    download,
    error,
    outputInput,
    outputInputHandler
  } = useContext(Context)

  return (
    <div className={styles.outputSection}>
      {error && 
        <div className={styles.notice}>{error}. You may have to reload</div> 
        || !users.length && 
        <div className={styles.notice}>Loading... Please wait.</div>}
      <h2>{selectedUser}</h2>
      <p>Filter by</p>
      <div className={styles.inputs}>
        <div className={styles.searchBar}>
          <FaSearch size="14" color="grey" />
          <input value={outputInput} placeholder="Find in list"
            onChange={outputInputHandler} />
        </div>
        <div className={styles.countrySelect}>
          <CountrySelection />
        </div>
        <CountryToggle />
      </div>
      <UsersList allUsers={allUsers} />
      <div className={styles.downloadPagination}>
        <div>
          <a href={download+"&format=csv&noinfo"}>
            <FaCloudDownloadAlt /> Download results
          </a>
        </div>
        <div className={styles.pagination}>
          <p onClick={_ => paginate("dec", setPage)}>&lt;</p>
          <p onClick={_ => paginate("inc", setPage)}>&gt;</p>
        </div>
      </div>
    </div>
  )
}

export default OutputSection