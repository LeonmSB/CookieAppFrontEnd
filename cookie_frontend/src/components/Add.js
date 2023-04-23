import React, { useState } from 'react'

//only need props as a param if we are passing in props to this component (we are going to here).
const Add = (props) => {
  let emptyCookie = { type: '', cost: 0, cost_to_make: 0, quantity: 0, img:'', manufacturer: '' }
  const [cookie, setCookie] = useState(emptyCookie)

  const handleChange = (event) => {
    setCookie({ ...cookie, [event.target.name]: event.target.value })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(cookie)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="type">Type: </label>
        <input type="text" name="type" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="cost">Cost: </label>
        <input type="number" name="cost" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="cost">Cost to Make: </label>
        <input type="number" name="cost_to_make" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="cost">Quantity: </label>
        <input type="number" name="quantity" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="cost">Image URL: </label>
        <input type="text" name="img" onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="cost">Manufacturer: </label>
        <input type="text" name="manufacturer" onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default Add