
import { NavLink } from "react-router-dom"
import { useSearch } from "../context/Search"
import Layout from "../Layout/Layout"

const SearchPage = () => {

    let [search, setSearch] = useSearch()
  return (
    
    <Layout>



<div className="container my-5">
        <div className="row mx-auto">
        {
               search?.result.length > 0 ? (search.result.map(m => 

                <div className="col-md-3 col-6">
                   <NavLink
                
                to={`/movie/detail/${m._id}`}>
                  <div className="img">
                  <img style={{maxHeight:'320px', width:'100%', borderRadius:'8px'}}
                      src={m.img}
                      alt={m.title}/>
                  </div>
                  <p style={{color:"black"}} className="title fw-bold fs-5 mt-3 text-center">{m.title}</p>
                  <p style={{color:"black"}} className="title fw-bold fs-5 mt-3 text-center">₹: { m.subscription === 0 ? "Free" : `${m.subscription}` }</p>

              </NavLink>
                </div>
                


            )) : (<h1 className="noResult" >Sorry No result found</h1>)
                
                    

                
              }
        </div>
        
             
            </div>
          
    </Layout>
  )
}
export default SearchPage