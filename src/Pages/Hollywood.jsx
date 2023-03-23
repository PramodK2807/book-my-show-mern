import { useEffect, useState } from "react"
import Common from "../components/Common"

const Hollywood = () => {

  const [movies, setMovies] = useState([])
    

  const getMovies = async() => {
    const resp = await fetch("http://localhost:3500/hollywood");
    const data = await resp.json()
    // console.log(data);
  }

  useEffect(() => {
    getMovies()
  }, [])
  
  return (
    <>
        <Common title={"Hollywood Movies"} movies={movies}/>
    </>
  )
}
export default Hollywood