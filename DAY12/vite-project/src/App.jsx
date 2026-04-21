import React, { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/users")
      .then((res) => res.json())
      .then((data) =>console.log(data.data))
      .catch((err) => console.log(err.message))
  }, []);

  const getData = () => {

  }

  return (
    <div>
      <h2> Users Data</h2>
      <button onClick={getData}>show data</button>
    </div>
  )
}

export default App