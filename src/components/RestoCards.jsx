import { Link } from "react-router";

const RestoCards=(props) => {
    
    
    const {resdata}=props;
    
    
    const { id, name, cloudinaryImageId, 
        costForTwo, 
        avgRatingString, cuisines
    } = resdata;
    
      const cuisine = cuisines.join(", ");
             
                return (
                    <Link to={"/restaurant/"+id} className="link">
                  <div className="card" key={id}>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt={name} className="card-img" />
                    <div className="card-content">
                      <h3>{name}</h3>
                      <p><strong>ID:</strong> {id}</p>
                      <p><strong>Price:</strong> {
                        costForTwo}</p>
                      <p><strong>Cuisine:</strong> {cuisine}</p>
                      <p><strong>⭐ Rating:</strong> {
                        avgRatingString} / 5</p>
                    </div>
                  </div>
                  </Link>
                );
              
            
         
    }



    export default RestoCards