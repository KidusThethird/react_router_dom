//import { useState } from "react"

import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {

  const {data : mydata , isLoading , refetch} = useQuery(["excuse"],()=>{
        return Axios.get("https://excuser-three.vercel.app/v1/excuse").then((res)=> res.data[0]);
  });



if(isLoading){
    return <h1>Loading</h1>
}

    return <div>
        <h1>Welcome Home!</h1>
        <br /><br />
        <h2>Random excuse :{mydata.excuse }</h2>
    </div>
}