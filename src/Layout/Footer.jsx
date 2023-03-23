import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light">
        <div className=" container">
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:'20px 0'}}>
            <p style={{fontSize:'20px', margin:'0'}}>List Your Show With Us</p>
            <div >
              <NavLink className="btn" style={{background:'#f84464', color:"white"}}>Contact</NavLink>
            </div>
          </div>
          <hr />

          <img
            className="mx-auto d-block"
            src="https://in.bmscdn.com/webin/common/icons/logo.svg"
            alt="logo"
          />

          <p className="text-center">© Only for the Learning Purpose || 2023 || Pramod </p>
<hr />

          <p className=" pb-3" style={{color:'rgb(165 165 165)', textAlign:'justify', margin:"auto"}}>

            The content and images used on this site are copyright protected and
            copyrights vests with the respective owners. The usage of the
            content and images on this website is intended to promote the works
            and no endorsement of the artist shall be implied. Unauthorized use
            is prohibited and punishable by law.
          </p>
        </div>
      </footer>

     
    </>
  );
};
export default Footer;
