import RestoCards from "./RestoCards"
import { restaurants } from "./utils/MockData"


const Body=() => {
    return (
        <div className="body-container">
    <h2 className="title">Top Restaurants</h2>
    <div className="card-container">
    {restaurants.map((restaurantlist)=>{
     return <RestoCards resdata={restaurantlist} />  

    })}
    </div>
  </div>
    )
}


export default Body
