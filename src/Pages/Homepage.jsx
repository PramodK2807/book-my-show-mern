import { useEffect, useState } from "react"
import Common from "../components/Common"
import ImageSlider from "../components/ImageSlider"
import { useMovies } from "../context/MovieContext"
import Layout from "../Layout/Layout"

const Homepage = () => {

  const [movies, setMovies] = useState()
    
  const getMovie = async() => {
      let data = await fetch(`${process.env.REACT_APP_API}/movies`)
      let movie = await data.json()
  //    console.log(movie);
      if(movie.success) {
          setMovies(movie.movies)
      }
  }
  
  useEffect(() => {
      getMovie()
  }, [])
    
  return (
    <Layout title={"Book My Show - Best movies and show"}>
        
        <ImageSlider/>

        <Common title={"Latest Movies"} movies={movies}/>
       

    </Layout>
  )
}
export default Homepage