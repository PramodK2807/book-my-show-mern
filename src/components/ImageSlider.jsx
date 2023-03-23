const ImageSlider = () => {
  return (
    <div>
        <div
          id="carouselExampleControls"
          className="carousel container slide carousel-margin"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner mt-3">
            <div className="carousel-item active">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677481946350_regionalweb.jpg"
                className="d-block img-fluid"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg"
                className="d-block img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677481946350_regionalweb.jpg"
                className="d-block img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1676269481715_rtuindiaweb.jpg"
                className="d-block img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
  )
}
export default ImageSlider