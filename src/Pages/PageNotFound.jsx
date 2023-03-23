

import Layout from "../Layout/Layout"
import ImageSlider from '../components/ImageSlider'
const PageNotFound = () => {
  return (
    <Layout>
        <ImageSlider/>

        <div style={{height:'80vh'}} className="d-flex flex-column justify-content-center align-items-center">
            <h1>Sorry, No Page Found </h1>
            <h4>Please Go Back</h4>
        </div>
    </Layout>
  )
}
export default PageNotFound