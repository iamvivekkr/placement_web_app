/// eslint-disable-next-line
import { React, useState } from "react";
import { Box } from "@mui/material";
import Navbar from "./asset/Navbar";
import {useNavigate} from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import signupImage from "./asset/images/signup.png";

const Registers = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
    //console.log(user);
    //just postman backend to send data
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      //console.log("res from server", res_data.message);
      //after register clear data in frontend box
      if(response.ok){
        
        //stored the token in localhost storge (brower in application section)
        storeTokenInLS(res_data.token);
        //localStorage.setItem("token", res_data.token);
        toast.success("Registration Successful");
        setUser({username: "", email: "", phone: "", password: "" });
        navigate("/sign-in");//send to login
      }else{
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("register", error);
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
                    src={signupImage}
                    className="img-fluid mt-5 py-5 p-0"
                    alt=""
                    width="100%"
                  />
                </div>
                <div className="col-lg-7 px-5 pt-5">
                  <h1 className="font-weight-bold py-3">Sign Up</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="col-lg-7">
                        <input
                          type="text"
                          name="username"
                          value={user.username}
                          onChange={handleInput}
                          placeholder="Username"
                          className="form-control my-3 py-2"
                        />
                      </div>
                    </div>
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
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          value={user.phone}
                          onChange={handleInput}
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
                          Create Your Account
                        </button>
                      </div>
                    </div>
                    <p className="mt-3">
                      Already Registered?{" "}
                      <a href="sign-in" style={{ textDecoration: "none" }}>
                        Login
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

export default Registers;
