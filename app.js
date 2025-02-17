import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
    return(
    <div>
        <h1>React eigteen</h1>
    </div>)
}

const Headings = () => (
    <div>
        <h1>React eigteens</h1>
        <Heading />
    </div>)








const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Headings />)