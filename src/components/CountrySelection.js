import React, { useContext } from 'react'
import { Context } from './ContextProvider'

const CountrySelection = () => {
  const { countryEnable } = useContext(Context)
  const countries = ["Nigeria", "UK", "USA"]
  return (
    <select disabled={countryEnable}>
      {countries.map(country => 
        <option key={country}>{country}</option>)}
    </select>
  )
}

export default CountrySelection