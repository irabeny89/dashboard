import React, { useContext } from 'react'
import { Context } from './ContextProvider'


const CountrySelection = () => {
  const { countryEnable, users } = useContext(Context)
  const filterCountry = (users = []) => 
    users.map(({location}) => location.country)

  const countries = filterCountry(users)
  
  return (
    <select disabled={countryEnable}>
      <option>Country</option>
      {countries.map(country => 
        <option key={Math.random()}>{country}</option>)}
    </select>
  )
}

export default CountrySelection