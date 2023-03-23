import Layout from "../Layout/Layout"
import video from '../video/video_2023-03-18_16-39-46.mp4'
const Watch = () => {
  return (
    <Layout>
        <video width="50%" height="50%" controls autoPlay>
      <source src={video} type="video/mp4"/>
     </video>
    </Layout>
  )
}
export default Watch