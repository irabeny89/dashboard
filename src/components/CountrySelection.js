import React from 'react'

const CountrySelection = () => {
  const countries = ["Nigeria", "UK", "USA"]
  return(
    <select>
      {countries.map(country => <option key={country}>{country}</option>)}
    </select>
  )
}

export default CountrySelection