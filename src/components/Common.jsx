
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, NavLink } from "react-router-dom";

const Common = ({title, movies}) => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div>

<div className="container my-4">
            <div className="header my-3 d-flex justify-content-between align-items-center">
                <p style={{fontSize:'25px', fontWeight:'bold', marginBottom:'0'}}>
                    {title}
                </p>
                <Link className="text-danger text-light fw-bold" to='/seeall' >See more</Link>
            </div>
        <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            containerClass="none"
            itemClass="carousel-item-padding-10-px" >

              {
                movies?.length > 0 ?
                movies.splice(0,10).map((m) => (
                  <NavLink className="my-2 card mx-2" key='d._id' to={`/movie/detail/${m._id}`}>
                  <div className="common-img" style={{height:"280px"}}>
                  <img  style={{width:"100%", height:"100%"}}  src={m.img} alt="i" />
                  </div>
                  <p style={{color:"#212121"}} className="fw-bold text-center mt-3">{m.title}</p>
                  
                </NavLink>
                ))

                :
                (<h1>Loading</h1>)
                
              }


        </Carousel>
    </div>
</div>
  );
};
export default Common;
