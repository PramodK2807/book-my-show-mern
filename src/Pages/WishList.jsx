import { NavLink } from "react-router-dom"
import Layout from "../Layout/Layout"
import { useAuth } from "../context/Auth"
import { useWishlist } from "../context/WishList"

const Wishlist = () => {
  const [wishlist, setWishlist] = useWishlist()
  let [auth, setAuth] = useAuth()


  const remove = (mid) => {
    try {
      let myWishlist = [...wishlist]
      let index = myWishlist.findIndex(item => item._id === mid)
      myWishlist.splice(index, 1)
      setWishlist(myWishlist)
      localStorage.setItem('wishlist', JSON.stringify(myWishlist));

    } catch (error) {
      
    }
  }
  return (
    <Layout>
      <div className="container my-3">
        <h5 className="text-center">Hello {auth?.user?.name ? `${auth.user.name}` : "User"}</h5>
        <p className="text-center">
          {
            wishlist.length > 0 
            ? (`You have ${wishlist.length} movies in your list ! ${auth?.token ? '' : "Please Login to Watch"} `)
            : ('')
          }
        </p>
        
        <div className="container my-5">
        <div className="row mx-auto seeall">
        {
               wishlist?.length > 0 ? (wishlist.map(m => 

                <div className="col-md-3 col-6">
                   <NavLink
                
                to={`/movie/detail/${m._id}`}>
                  <div className="img">
                  <img style={{width:'100%', borderRadius:'8px'}}
                      src={m.img}
                      alt={m.title}/>
                  </div>
                  <p style={{color:"black"}} className="title fw-bold fs-5 mt-3 text-center">{m.title}</p>
                  
                  <button className="btn"  style={{background:'#f84464', color:"white", border:"solid 1px blue", width:"100%"}} onClick={() => remove(m._id)}>Remove</button>

              </NavLink>
                </div>
                


            )) : (<h1 className="noResult">Your WishList is Empty</h1>)
                
                    

                
              }
        </div>
        
             
            </div>
        
             
            </div>
          
    </Layout>
  )
}
export default Wishlist