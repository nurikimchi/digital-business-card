import React from "react"
import ReactDOM from "react-dom"
import About from "./Components/About.js"
import Footer from "./Components/Footer.js"
import Info from "./Components/Info.js"
import Interests from "./Components/Interests.js"


function App () {
    return (
        <div className = "app">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector("#root"))