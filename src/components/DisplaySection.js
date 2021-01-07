import React from 'react'

const DisplaySection = ({selection='Selected Users'}) => 
  <div>
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