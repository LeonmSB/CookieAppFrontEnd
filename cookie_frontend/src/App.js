import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/Add.js'
import Edit from './components/Edit.js'

const App = () => {

  let [cookies, setCookies] = useState([])

  const getCookies = () => {
    axios
      .get('http://localhost:8000/api/cookies')
      .then(
        (response) => setCookies(response.data),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error))
   }
   
   const handleCreate = (addCookie) => {
    axios
      .post('http://localhost:8000/api/cookies', addCookie)
      .then((response) => {
        console.log(response)
        getCookies()
      })
  }

  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/cookies/' + event.target.value)
      .then((response) => {
        getCookies()
      })
  }
  const handleUpdate = (editCookie) => {
    console.log(editCookie)
    axios
      .put('http://localhost:8000/api/cookies/' + editCookie.id, editCookie)
      .then((response) => {
        getCookies()
      })
  }
   useEffect(() => {
    getCookies()
   }, [])

  return (
    <>
      <h1>Cookie App</h1>
      <Add handleCreate={handleCreate}/>
      <div className="cookies">
      {cookies.map((cookie) => {
      return (
      <div className="cookie" key={cookie.id}>
        <h1>h</h1>
       <h4>Type: {cookie.type}</h4>
       <h5>Cost: {cookie.cost}</h5>
       {/* <Edit handleUpdate={handleUpdate} cookie={cookie} /> */}
       <button onClick={handleDelete} value={cookie.id}>Eat Cookie</button>
     </div>
   )
 })}
</div>
    </>
  )
}

export default App
