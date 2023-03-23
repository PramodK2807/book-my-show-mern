import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import useCategory from "../hooks/useCategory";
import { useSearch } from "../context/Search";
import { useWishlist } from "../context/WishList";
import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";
import "../Style/Header.css";

const Header = () => {
  const [menu, setMenu] = useState();
  const [auth, setAuth] = useAuth();
  const [search, setSearch] = useSearch();
  const [wishlist] = useWishlist();
  // const [movies, setMovies] = useMovies()

  const categories = useCategory();
  const navigate = useNavigate();
  // console.log(categories)

  useEffect(() => {}, [auth]);

  const searchHandle = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch(
        `${process.env.REACT_APP_API}/search/${search.keyword}`
      );
      let data = await result.json();
      setSearch({ ...search, result: data });
      navigate("/search");
    } catch (error) {
      // console.log(error)
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    toast.success("Logged out successfully");
  };
  return (
    <div className="navb" style={{ background: "rgb(51 53 69)", minHeight: "60px" }}>
      <nav>
        <div className="container-fluid">
          <div className="nav-container">
            <NavLink className="navlogo" to='/'>
              <img
                style={{ width: "130px" }}
                src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                alt="logo"
              />
            </NavLink>
            <form
              style={{ position: "relative" }}
              className="d-flex"
              onSubmit={searchHandle}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search.keyword}
                onChange={(e) =>
                  setSearch({ ...search, keyword: e.target.value })
                }
              />
            </form>
            <div className={menu ? "mobile" : "nav-links"}>
              <ul className="ul">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/wishlist">
                    WishList{" "}
                    <span
                      style={{
                        background: "red",
                        padding: "0 7px",
                        border: "solid 1px white",
                        borderRadius: "50%",
                      }}
                    >
                      {wishlist.length}
                    </span>
                  </NavLink>
                </li>
                <li className=" dropdown">
                  <NavLink
                    className=" dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genere
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {categories.map((cat) => (
                      <li key={cat._id}>
                        <NavLink
                          className="dropdown-item text-dark"
                          to={`/categories/${cat._id}`}
                        >
                          {cat.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center ">
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-regular fa-user fs-5"></i>
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {auth?.user ? (
                    <>
                      <li>
                        <NavLink
                          to="/"
                          onClick={(e) => logout(e)}
                          className="bg-light dropdown-item  text-dark"
                        >
                          <FiLogOut style={{marginRight:"10px"}} /> Logout 
                        </NavLink>
                      </li>
                    </>
                  ) 
                  
                  : 
                  
                  (
                    <>
                    <li>
                    <NavLink to="/login" className="bg-light dropdown-item  text-dark">
                    <FiLogOut style={{marginRight:"10px"}} />  Login
                      </NavLink>
                    </li>
                      
                    </>
                  )}
                </ul>
              </li>

              <i
                style={{ margin: " 0 15px" }}
                onClick={() => setMenu(!menu)}
                className={
                  menu
                    ? " icon menu-icon fa-solid fa-xmark"
                    : "icon menu-icon fa-sharp fa-solid fa-bars"
                }
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
