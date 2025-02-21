import { useEffect ,useState} from "react"
import { useParams } from "react-router"
import Shimmer from "./Shimmer"
import { RESTAURENT_DETAILS } from "./utils/Constant"

const RestoDetailes = () => {

const [itemcard,setItemcard]=useState(null)

const {resid}=useParams()

console.log(resid);



    useEffect(()=>{
        fetchresto()
    },[])



const fetchresto= async()=>{
    const data=await fetch(RESTAURENT_DETAILS+resid)
    const jsondata=await data.json()
    setItemcard(jsondata.data)
}

if(itemcard===null){
    return <Shimmer/>
}



const {name,cuisines,avgRating,slugs,address,contact,openingHours}=itemcard.cards[2].card.card.info
const itemcardlist=itemcard?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || []




return(
    <div className="restocard">
    <div className="restocard-info">
      <h2 className="restocard-name">{name}</h2>
      <p className="restocard-cuisines"><strong>Cuisines:{cuisines.join(", ")}</strong></p>
      <p className="restocard-rating"><strong>Rating:{avgRating}</strong> ⭐ / 5</p>
      <p className="restocard-address"><strong>Address:{slugs.restaurant+" " + slugs.city}</strong> </p>
    
      <h3 className="restocard-menu-title">Menu</h3>
      <ul className="restocard-menu">


        {itemcardlist.length>0?(
        itemcardlist.map((item) => (
          <li  className="menu-item"key={item.card.info.id}>
            <span className="menu-item-name">{item.card.info.name}</span>
            <span className="menu-item-price">Rs{item.card.info.price/100}</span>
          </li>
        ))): 
        <li> no more detailes</li>
    
    
    
    }




      </ul>
    </div>
  </div>
)

}

export default RestoDetailes