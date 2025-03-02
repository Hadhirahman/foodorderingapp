import { Link } from "react-router";

const RestoCards=(props) => {
    
    
    const {resdata}=props;
    
    console.log(resdata);
    
    
    const { id, name, cloudinaryImageId, 
        costForTwo, 
        avgRatingString, cuisines
    } = resdata;
    
      const cuisine = cuisines.join(", ");
             
                return (
                    <Link to={"/restaurant/"+id} className="link">
                  <div className="card bg-white rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out max-w-[250px] w-full flex flex-col justify-between items-stretch h-full hover:scale-105" key={id}>
                  
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name} className="card-img w-full h-[200px] object-cover rounded-t-xl" />
                    <div className="card-content p-4 text-start">
                      <h3 className="text-lg text-gray-800">{name}</h3>
                      <p className="text-base text-gray-600 mt-1"><strong>ID:</strong> {id}</p>
                      <p className="text-base text-gray-600 mt-1"><strong>Price:</strong> {
                        costForTwo}</p>
                      <p className="text-base text-gray-600 mt-1"><strong>Cuisine:</strong> {cuisine}</p>
                      <p className="text-base text-gray-600 mt-1"><strong> Rating:⭐</strong> {
                        avgRatingString} / 5</p>
                    </div>
                  </div>
                  </Link> 
                );
              
            
         
    }



    //highrt order component for promoted


   export const promoted=(RestoCards)=>{
      return(props)=>{
        return(
          <div >
           <label className="absolute bg-black text-white rounded-3xl hover:scale-105">promoted</label>
            <RestoCards {...props}/>
          </div>
        )
      }
    }



    export default RestoCards