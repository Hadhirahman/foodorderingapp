import RestoCards from "./RestoCards"
// import { restaurants } from "./utils/MockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body=() => {

const [restaurent, setRestaurent] = useState([])


useEffect(()=>{
    fetchdata()
},[])

const fetchdata=async()=>{ 
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const jsondata=await data.json()
    // console.log(jsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurent(jsondata.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    
}

if(restaurent.length===0){

    return (
        <div className="body-container">

       <div className="card-container">
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
      <Shimmer/>
       </div>
       </div>
    )
}


    return (
        <div className="body-container">
    <h2 className="title">Top Restaurants</h2>
    <div className="btn-container">
        <button className="btn" onClick={()=>{
            const filterdata =restaurent.filter((restaurentfilter)=>restaurentfilter.info.avgRatingString>4.5)
            setRestaurent(filterdata)
        }}>top rating restaurant</button>
    </div>
    <div className="card-container">
    {restaurent.map((restaurantlist)=>{
        {/* console.log(restaurantlist); */}
     return <RestoCards key={restaurantlist.info.id} resdata={restaurantlist.info} />  

    })}
    
    </div>
  </div>
    )
}


export default Body
