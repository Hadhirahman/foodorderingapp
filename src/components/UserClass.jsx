import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            count2:0
        }
        console.log("chiled constructor");
        
        
    }


    componentDidMount(){
        console.log("chiled did mound");
        
    }
    
    render(){
    const {name,age, location,contact}=this.props
    const {count,count2}=this.state

    console.log("chiled render");
    
    return(
        <div>
            <h1>Count:{count}</h1>
            <h1>Count:{count2}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>increase count</button>
            <button onClick={()=>{
                this.setState({
                    count2:this.state.count2-1
                })
            }}>decereasecount</button>
        <h1>Name:{name}</h1>
        <h3>Age:{age}</h3>{
           
        }
        <h3>Location:{location}</h3>
        <h3>Contact:{contact}</h3>
    </div>
    )
}
}
export default UserClass