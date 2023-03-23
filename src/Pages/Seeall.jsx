
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import LowToHigh from "../components/LowToHigh";
import { useMovies } from "../context/MovieContext";
import Layout from "../Layout/Layout";

const Seeall = () => {

    const [movies, setMovies] = useMovies([])
    

  return (
    <Layout>
       <div className="container my-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1 className=" allmove">All Movies</h1>

        
        </div>

        <LowToHigh items={movies}/>
        
        
        <div className="row mx-auto seeall">
        {
               movies?.length > 0 ? (movies.map(m => 

                <div key={m._id} className="col-md-3 col-6 my-3">
                   <NavLink
                
                to={`/movie/detail/${m._id}`}>
                  <div className="img">
                  <img style={{maxHeight:'320px', width:'90%', borderRadius:'8px'}}
                      src={m.img}
                      alt={m.title}/>
                  </div>
                  <p style={{color:"black"}} className="title fw-bold fs-5 mt-3 text-center">{m.title}</p>
                  <p style={{color:"black"}} className="title fw-bold fs-5 mt-3 text-center">₹: { m.subscription === 0 ? "Free" : `${m.subscription}` }</p>

              </NavLink>
                </div>
                


            )) : (<h1 className="noResult">Sorry No result found</h1>)
              
              }
        </div>
        
             
            </div>
    </Layout>
  );
};
export default Seeall;
