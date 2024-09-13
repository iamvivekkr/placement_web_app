import { Box } from "@mui/material";
import { React, useState } from "react";
import Navbar from "./asset/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import signinImage from "./asset/images/signup.png";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    //console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const res_data = await response.json();
      //after login clear data in box and send where u want by navigate
      if(response.ok){
        
        //stored the token in localhost storge (brower in application section)
        storeTokenInLS(res_data.token);
        //localStorage.setItem("token", res_data.token);

        toast.success("Login Successful");
        setUser({email: "", password: "" });
        //navigate("/user-home");//send to login
        if (res_data.isAdmin) {
          // If user is admin, navigate to "/admin"
          navigate("/admin/home");
        } else {
          // If user is not admin, navigate to "/user-home"
          navigate("/user-home");
        }
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        //console.log("Invalid Credential");
      }
      
    } catch (error) {
      console.log("login", error);
    }

    
  };

  return (
    <>
      <Box sx={{ display: "flex", paddingTop: "6%" }}>
        <Navbar />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="Form my-4 mx-1">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-5">
                  <img
                    src={signinImage}
                    className="img-fluid mt-2 py-5 p-0"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-lg-7 px-5 pt-5">
                  <h1 className="font-weight-bold py-3">Sign In</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="col-lg-7">
                        <input
                          type="text"
                          name="email"
                          value={user.email}
                          onChange={handleInput}
                          placeholder="Email"
                          className="form-control my-3 py-2"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col-lg-7">
                        <input
                          type="password"
                          name="password"
                          value={user.password}
                          onChange={handleInput}
                          placeholder="Password"
                          className="form-control my-3 py-2"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col-lg-7">
                        <button
                          type="submit"
                          className="btn1 mt-3 mb-3 "
                          value="Register"
                        >
                          Log In
                        </button>
                      </div>
                    </div>

                    <p className="mt-3">
                      Don't have an account?{" "}
                      <a href="register" style={{ textDecoration: "none" }}>
                        Signup
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Signin;
