import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Heder";
import Body from "./components/Body";





const Applayout=() => {
    return (<>

        <Header/>
        <Body/>
    </>
        
    )

}





const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Applayout/>)