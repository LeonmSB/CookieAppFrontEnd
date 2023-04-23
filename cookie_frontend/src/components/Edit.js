import React, { useState } from 'react'

const Edit = (props) => {

  const [cookie, setCookie] = useState({...props.cookie})

  const handleChange = (event) => {
    setCookie({ ...cookie, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(cookie)
  }
  return (
    <>
      <details>
        <summary>Edit Cookie</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">Type: </label>
          <input
            type="text"
            name="type"
            value={cookie.type}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="age">Cost: </label>
          <input
            type="text"
            name="cost"
            value={cookie.cost}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="madeBy">Manufacturer: </label>
          <input
            type="text"
            name="madeBy"
            value={cookie.manufacturer}
            onChange={handleChange}
          />
          <input type="submit" />
        </form>
      </details>
    </>
  )
}

export default Edit