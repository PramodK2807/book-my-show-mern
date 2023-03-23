import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import Layout from "../Layout/Layout"
import {BsBookmarkHeartFill} from 'react-icons/bs'
import {FaPlayCircle} from 'react-icons/fa'
import { useWishlist } from "../context/WishList"
import { toast } from "react-toastify"
import { useAuth } from "../context/Auth"


const MoviePage = () => {
    let [movies, setMovies] = useState([])
    let [wishlist, setWishlist] = useWishlist()
    let [auth, setAuth] = useAuth()



    const params = useParams()

    useEffect(() => {
        getDetail()
    },[wishlist])

    const getDetail = async() => {
        let data = await fetch(`${process.env.REACT_APP_API}/movie/detail/${params.id}`)
        let result =  await data.json()
        if(result){
            setMovies(result.movie)
        }
    }

    const wish = async (item) => {
        // console.log(item);
        const exist = await wishlist.find(m => m._id === item._id)
        if(!exist){
            localStorage.setItem("wishlist", JSON.stringify([...wishlist, item]))
            setWishlist([...wishlist, item])
            toast.success(`${item.title} added to wishlist`)
            
        }
        else{
            toast.error(`${item.title} is already in the wishlist`)
        }

    }


  return (
    <Layout>
        <div className="container my-5 ">
            <div className="row d-flex align-items-center">


                {
                    movies.map((m) => (
                       <>
                        <div className="col-md-3 moviepage" key={m._id}>
                            <img style={{width:"90%", height:'100%'}} src={m.img} alt={m.title} />
                        </div>
                        <div className="col-md-8">
                        
                            <div className="row d-flex justify-content-between align-items-center">
                                <h1 className="col-7">{m.title}</h1>
                                <div className="col-5 text-end">Year : 2021 &nbsp; <BsBookmarkHeartFill onClick={() => wish(m)

                            } style={{fontSize:"35px", alignSelf:'end', cursor:"pointer"}}/></div>
                            </div>
                            <p>{m.movie_description}</p>
                            <div className="row d-flex align-items-center">
                            <p className="fw-bold col-md-8">Watch @ ₹ {m.subscription === 0 ? "Free" : `${m.subscription}`}</p>


                            {
                                auth?.user ? 
                                (<button  className=" btn fw-bold col-md-3 align-items-end" style={{background:'#f84464', color:'white'}}> <NavLink to='/watch' style={{color:"white"}}>Watch Now</NavLink> <FaPlayCircle/></button>) 
                                : 
                                (<button  className=" btn fw-bold col-md-3 align-items-end" style={{background:'#f84464', color:'white'}}> <NavLink to='/login' style={{color:"white"}}>Login To Watch</NavLink> <FaPlayCircle/></button>)
                            }
                            </div>
                        </div>
                        </>
                    ))
                }
            </div>
        </div>
    </Layout>
  )
}
export default MoviePage