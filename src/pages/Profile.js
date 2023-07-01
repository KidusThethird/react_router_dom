import { ChangeName } from "./ChangeName"
import { AppContext } from "../App"
import { useContext } from "react"



export const Profile = () => {

    const{username,setUsername} = useContext(AppContext);

    return <div>
        <h1>This is a Profile page </h1>
        <h1>The name is {username}</h1>
        <ChangeName  />
    </div>
}