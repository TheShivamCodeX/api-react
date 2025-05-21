import { useEffect, useState } from "react"

export default function Weather(){

    const[weather,setWeather] = useState('')
    let url = "https://gradeupinfotech.com/db/fetchHomePageBlogs.php"

    const getWeather = async () =>{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
    };

    useEffect( () => {
        getWeather();
    },[])

    return(
        <>
        <h2>{weather}</h2>
        </>
    )
}