import React, { createContext, useState } from 'react'

export const Context = createContext()

const ContextProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] =
    useState("All Users")
  const setOutputSectionTitle = selectedOption =>
    setSelectedUser(selectedOption)
  const [countryEnable, setCountryEnable] =
  useState("")

  const outputSectionData = { 
    selectedUser,
    setOutputSectionTitle,
    countryEnable,
    setCountryEnable
  }
  return (
    <Context.Provider value={outputSectionData}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider