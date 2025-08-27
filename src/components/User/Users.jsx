import React from 'react'
import { useParams } from 'react-router-dom'

function Users() {
  const {userId} = useParams()

  return (
    <div>
      <h1 className='bg-stone-300 text-stone-800 text-2xl p-2 border rounded-2xl'>This is for Param testing for useParams() hook </h1>
      <br />
      <h1 className='bg-stone-300 text-center text-stone-800 text-3xl p-2 border rounded-2xl'>User: {userId}</h1>
    </div>
  )
}

export default Users