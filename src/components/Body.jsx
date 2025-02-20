import RestoCards from "./RestoCards"
// import { restaurants } from "./utils/MockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body=() => {

const [restaurent, setRestaurent] = useState([])
const [filteredrestaurent,setFilteredrestsurent]=useState([])

const [searchtext, setSearchtext] = useState("")




useEffect(()=>{
    fetchdata()
},[])

const fetchdata=async()=>{ 
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.51600&lng=76.21570&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const jsondata=await data.json()
    // console.log(jsondata.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurent(jsondata?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredrestsurent(jsondata?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants)

    
}




    return restaurent.length===0 ?(
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
    ):(
        <div className="body-container">
    <h2 className="title">Top Restaurants</h2>
    <div className="btn-container">
        <button className="btn" onClick={()=>{
            const filterdata =restaurent.filter((restaurentfilter)=>restaurentfilter.info.avgRatingString>4.5)
            setRestaurent(filterdata)
        }}>top rating restaurant</button>
<div className="search_container">


<input type="text" placeholder="search" className="search_input" value={searchtext} onChange={(e)=>{setSearchtext(e.target.value)}}/>


<button className="search_btn"  onClick={()=>{
    const filterRestaurent=restaurent.filter((searchfilter)=>
        
     searchfilter.info.name.toLowerCase().includes(searchtext.toLowerCase())
     
    )
    setFilteredrestsurent(filterRestaurent);
    
    

}}>search</button> 
</div>

    </div>
    <div className="card-container">
    {filteredrestaurent.map((restaurantlist)=>{
        {/* console.log(restaurantlist); */}
     return <RestoCards key={restaurantlist.info.id} resdata={restaurantlist.info} />  

    })}
    
    </div>
  </div>
    )
}


export default Body
