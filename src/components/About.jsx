import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"


class About extends Component{
    constructor(props){
        super(props)
        console.log("parrent constuctor ")
    }

componentDidMount(){
    console.log("parrent did mount");
    
}


render(){
    console.log("parent render");
    return(
        
<div className="body-container">
            <h1>About</h1>

            <User name={"Hadhi rahman"} age={27} location={"Kozhikode"} contact={9294879480984}/>
            <UserClass name={"Hadhi rahman"} age={27} location={"Kozhikode"} contact={9294879480984}/>
           
        </div>
    )
    
}

}
export default About