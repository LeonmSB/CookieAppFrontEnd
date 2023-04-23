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
        <h5>Update Quantity Available</h5>
        <form onSubmit={handleSubmit}>
        <label htmlFor="quantity"></label>
          <input
            type="number"
            name="quantity"
            value={cookie.quantity}
            onChange={handleChange}
          />
                    <input type="submit" />
        </form>
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
          <label htmlFor="cost">Cost: </label>
          <input
            type="number"
            step='.01'
            name="cost"
            value={cookie.cost}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="cost_to_make">Cost To Make: </label>
          <input
            type="number"
            step='.01'
            name="cost_to_make"
            value={cookie.cost_to_make}
            onChange={handleChange}
          />
                    <br />
          <br />
          <label htmlFor="manufacturer">Manufacturer: </label>
          <input
            type="text"
            name="manufacturer"
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