const RestoCards=(props) => {
    
    
    const {resdata}=props;
    
    
    const { id, name, image, price, rating, cuisine } = resdata;
    
      
             
                return (
                  <div className="card" key={id}>
                    <img src={image} alt={name} className="card-img" />
                    <div className="card-content">
                      <h3>{name}</h3>
                      <p><strong>ID:</strong> {id}</p>
                      <p><strong>Price:</strong> {price}</p>
                      <p><strong>Cuisine:</strong> {cuisine}</p>
                      <p><strong>⭐ Rating:</strong> {rating} / 5</p>
                    </div>
                  </div>
                );
              
            
         
    }



    export default RestoCards