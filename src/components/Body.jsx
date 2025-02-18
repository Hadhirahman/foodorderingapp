import RestoCards from "./RestoCards"
import { restaurants } from "./utils/MockData"
import { useState } from "react"


const Body=() => {

const [restaurent, setRestaurent] = useState(restaurants)


    return (
        <div className="body-container">
    <h2 className="title">Top Restaurants</h2>
    <div className="btn-container">
        <button className="btn" onClick={()=>{
            const filterdata =restaurent.filter((restaurentfilter)=>restaurentfilter.rating>4)
            setRestaurent(filterdata)
        }}>top rating restaurant</button>
    </div>
    <div className="card-container">
    {restaurent.map((restaurantlist)=>{
     return <RestoCards key={restaurantlist.id} resdata={restaurantlist} />  

    })}
    </div>
  </div>
    )
}


export default Body
