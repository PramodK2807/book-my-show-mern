import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";
import '../Style/Login.css'
import { useAuth } from "../context/Auth";

const Login = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState(false);
    let [auth, setAuth] = useAuth()
    let navigate = useNavigate()
    let location = useLocation()
    

    useEffect(() => {}, [auth])


    const login = async (e) => {
        e.preventDefault();

        if(!email || !password) {
            setError(true);
            toast.error("Please enter email and password");
            return false;
        }
        if(password.length < 8){
          setError(true);
            toast.error("Password must be at least 8 characters");
            return false;
        }

        try {
            let response = await fetch(`${process.env.REACT_APP_API}/login`, {method: 'POST',
            body: JSON.stringify({email, password}),
            headers: { "Content-Type": "application/json" },
        })

        let data = await response.json()
        if(data.success){
          navigate('/')
          toast.success(data.message);
            setAuth({
                ...auth,
                user: data.user,
                token: data.token
            })
            // console.log(data)
            localStorage.setItem('auth', JSON.stringify(data))
            navigate(location.state || '/')
        }
        else{
            toast.error(data.message)
        }
        } catch (error) {
            // console.log(error);
            toast.error("User not registered or invalid credentials");
           
        }
    }

  return (
    <Layout>
      <div className="wrapper">
        <h1 style={{ textAlign: "center", marginBottom: "20px " }}>
          Login
        </h1>
        <div className="logo">
          <img
            src="https://i.ibb.co/PhN5kkd/925916758s.png"
            alt="logo"
          />
        </div>
        <div className="text-center mt-4 name">Book My Show</div>
        <form className="p-3 mt-3">
        
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          {error && !email && (
            <div style={{ marginTop: "2px", paddingTop: "0", color: "red" }}>
              Please Enter Email
            </div>
          )}
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && !password && (
            <div style={{ marginTop: "2px", paddingTop: "0", color: "red" }}>
              Please Enter Password
            </div>
          )}
          <button onClick={(e) => login(e)} type="submit" className="btn mt-3" >
            Login
          </button>
        </form>

        <p>Don't have an account  <Link to='/signup'>Create</Link> </p>
      </div>
    </Layout>
  );
};
export default Login;