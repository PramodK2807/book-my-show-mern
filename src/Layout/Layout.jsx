import Footer from "./Footer"
import Header from "./Header"
// import {Helmet} from 'react-helmet'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


const Layout = ({children, title, description,keywords, author}) => {
  return (
    <div>
      {/* <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>

      </Helmet> */}
        <Header/>
        <ToastContainer/>
        <main style={{minHeight:'83vh'}}>
        {children}
        
        </main>
        <Footer/>
    </div>
  )
}


// Layout.defaultProps = {
//   title:"Book My Show #1",
//   description:"Watch Movies and events here...",
//   keywords:"movies, show, tv show, node, mongodb, react",
//   author:"Pramod"

// }
export default Layout