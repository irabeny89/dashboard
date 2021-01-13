import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState("All Users")
  const setOutputSectionTitle = selectedOption =>
    setSelectedUser(selectedOption)
  const [countryEnable, setCountryEnable] = useState("")
  const [page, setPage] = useState(1)
  const [gender, setGender] = useState('')
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")
  const [download, setDownload] = useState("")
  const [controlInput, setControlInput] = useState("")
  const [outputInput, setOutputInput] = useState("")

  const controlInputHandler = e => setControlInput(e.target.value)
  const outputInputHandler = e => setOutputInput(e.target.value)

  useEffect(async () => {
    try {
      const api = `https://randomuser.me/api/?page=${page}&results=5&seed=aaa`
      const { data } = await axios.get(api)
      setUsers(data.results)
      setDownload(api)
    } catch (err) { setError(err.message) }
  }, [page])

  const paginate = (op, setPage) => 
    op == "dec" && page > 0 && setPage(prev => prev - 1) ||
    op == "inc" && setPage(prev => prev + 1)
  
  const outputSectionData = {
    selectedUser,
    setOutputSectionTitle,
    countryEnable,
    setCountryEnable,
    users,
    setUsers,
    gender,
    setGender,
    paginate,
    setPage,
    error,
    download,
    setDownload, 
    controlInput,
    controlInputHandler,
    outputInput,
    outputInputHandler
  }
  return (
    <Context.Provider value={outputSectionData}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider