import { useMovies } from "../context/MovieContext";

const LowToHigh = ({items}) => {

    const [movies, setMovies] = useMovies()

    const lthSort = () => {
        
        const lth = [...items].sort((a, b) => a.subscription -  b.subscription)
        setMovies(lth)
    }

    const htlSort = () => {
        
        const htl = [...items].sort((a, b) => b.subscription -  a.subscription)
        setMovies(htl)
    }
    

  return (
    <div style={{display:"flex" , alignItems:"center", gap:"20px"}}>
        <h4>Sort</h4>
        <select name="" id="" className="py-1 px-3">
            <option value="lth" onClick={lthSort}>Low To High</option>
            <option value="htl" onClick={htlSort}>High To Low</option>
        </select>
    </div>
  )
}
export default LowToHigh