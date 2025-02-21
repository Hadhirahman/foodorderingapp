import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
    const errors = useRouteError()
    console.log(errors);
    
  return (
    <div>
        <h1></h1>
      <h1>something went wrong</h1>
      <h1>{errors.data}</h1>
    </div>
  )
}

export default Error
