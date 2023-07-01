//import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "../App"
export const Home = () => {

    const{username} = useContext(AppContext);

    return <div>
        <h1>Welcome Home!</h1>
        <br /><br />
        <h2>The name is : {username}</h2>
    </div>
}