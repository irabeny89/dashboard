import React, { createContext, useState } from 'react'

export const OutputContext = createContext()

const OutputSectionProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState("All Users")
  const setOutputSectionTitle = selectedOption => setSelectedUser(selectedOption)
  const outputSectionData = { selectedUser, setOutputSectionTitle }
  return (
    <OutputContext.Provider value={outputSectionData}>
      {children}
    </OutputContext.Provider>
  )
}

export default OutputSectionProvider