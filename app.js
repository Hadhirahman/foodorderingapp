import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <header className="header">
        <div className="container">
          {/* Logo */}
          <div className="logo">
            <a href="/">MyLogo</a>
          </div>
  
          {/* Navigation */}
          <nav className="nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>
  
        </div>
      </header>

    )
}



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

const restaurants = [
    { 
      id: 1, 
      name: "Italian Bistro", 
      image: "https://img.freepik.com/free-photo/fried-vegetables-with-sauce-pan_1220-5230.jpg?t=st=1739818612~exp=1739822212~hmac=d9f631712ce9082c76e2d72b5f1ffd767b420e20743985994a478911f6db8706&w=1380", 
      price: "$10", 
      rating: 4.5, 
      cuisine: "Italian" 
    },
    { 
      id: 2, 
      name: "Sushi Paradise", 
      image: "https://img.freepik.com/free-photo/lavash-rolls-with-stuffings-tomatoes_114579-3418.jpg?t=st=1739818901~exp=1739822501~hmac=b2d960d380314c98d022119b0af749345a8c11defd219b82144de3c63f8c4d46&w=1060", 
      price: "$15", 
      rating: 4.7, 
      cuisine: "Japanese" 
    },
    { 
      id: 3, 
      name: "BBQ Heaven", 
      image: "https://img.freepik.com/free-photo/fried-vegetables-with-sauce-pan_1220-5230.jpg?t=st=1739818612~exp=1739822212~hmac=d9f631712ce9082c76e2d72b5f1ffd767b420e20743985994a478911f6db8706&w=1380", 
      price: "$20", 
      rating: 4.3, 
      cuisine: "BBQ" 
    },
    { 
      id: 4, 
      name: "Vegan Delight", 
      image: "https://img.freepik.com/free-photo/lavash-rolls-with-stuffings-tomatoes_114579-3418.jpg?t=st=1739818901~exp=1739822501~hmac=b2d960d380314c98d022119b0af749345a8c11defd219b82144de3c63f8c4d46&w=1060", 
      price: "$12", 
      rating: 4.8, 
      cuisine: "Vegan" 
    }, { 
        id: 1, 
        name: "Italian Bistro", 
        image: "https://img.freepik.com/free-photo/fried-vegetables-with-sauce-pan_1220-5230.jpg?t=st=1739818612~exp=1739822212~hmac=d9f631712ce9082c76e2d72b5f1ffd767b420e20743985994a478911f6db8706&w=1380", 
        price: "$15", 
        rating: 4.5, 
        cuisine: "Italian" 
      },
      { 
        id: 2, 
        name: "Sushi Paradise", 
        image: "https://img.freepik.com/free-photo/lavash-rolls-with-stuffings-tomatoes_114579-3418.jpg?t=st=1739818901~exp=1739822501~hmac=b2d960d380314c98d022119b0af749345a8c11defd219b82144de3c63f8c4d46&w=1060", 
        price: "$18", 
        rating: 4.7, 
        cuisine: "Japanese" 
      },
      { 
        id: 3, 
        name: "BBQ Heaven", 
        image: "https://img.freepik.com/free-photo/fried-vegetables-with-sauce-pan_1220-5230.jpg?t=st=1739818612~exp=1739822212~hmac=d9f631712ce9082c76e2d72b5f1ffd767b420e20743985994a478911f6db8706&w=1380", 
        price: "$21", 
        rating: 4.3, 
        cuisine: "BBQ" 
      },
      { 
        id: 4, 
        name: "Vegan Delight", 
        image: "https://img.freepik.com/free-photo/lavash-rolls-with-stuffings-tomatoes_114579-3418.jpg?t=st=1739818901~exp=1739822501~hmac=b2d960d380314c98d022119b0af749345a8c11defd219b82144de3c63f8c4d46&w=1060", 
        price: "$9", 
        rating: 4.8, 
        cuisine: "Vegan" 
      }
  ];



const Applayout=() => {
    return (<>

        <Header/>
        <Body/>
    </>
        
    )

}





const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Applayout/>)