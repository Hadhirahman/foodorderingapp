import { useState } from "react"

const User=(props)=>{
    const [count]=useState(0)


    const {name,age,location,contact}=props
    return(

        <div>
            <h1>Count:{count}</h1>
            <h1>Name:{name}</h1>
            <h3>Age:{age}</h3>
            <h3>Location:{location}</h3>
            <h3>Contact:{contact}</h3>
        </div>
    )
}

export default User