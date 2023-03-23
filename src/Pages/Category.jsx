import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Layout from "../Layout/Layout";

const Category = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getMovies();
    }
  }, [params.id]);

  const getMovies = async () => {
    let data = await fetch(
      `${process.env.REACT_APP_API}/category/${params.id}`
    );
    let result = await data.json();
    // console.log(result);
    if (result) {
      setMovies(result.movies);
      setCategory(result.category);
    } else alert("No results found");
  };

  return (
    <Layout>
        <div className="container my-5">
        <div className="row mx-auto seeall">
        {
               movies?.length > 0 ? (movies.map(m => 

                <div className="col-md-3 col-6">
                   <NavLink
                
                to={`/movie/detail/${m._id}`}>
                  <div className="img">
                  <img style={{maxHeight:'320px', width:'100%', borderRadius:'8px'}}
                      src={m.img}
                      alt={m.title}/>
                  </div>
                  <p style={{color:"black"}} className="title fw-bold fs-5 mt-3 text-center">{m.title}</p>
                  
                 
              </NavLink>
                </div>
                


            )) : 
            (<h1 className="noResult">No Movies Found on Selected Category</h1>)
                
                    

                
              }
        </div>
        
             
            </div>
    </Layout>
  );
};
export default Category;