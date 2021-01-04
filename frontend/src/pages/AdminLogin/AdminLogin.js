import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import LOADER_GIF from "../../images/loading.gif";
var axios = require("axios");

export default function Login() {
  const style = {
    margin: 15,
  };

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  // Check if already logged in
  if (sessionStorage.getItem("isLoggedIn")) {
    // navigate to admin page
    window.location.href = "/admin";
  }


  const handleLogin = () => {
    var apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/admin/login/";
    var payload = {
      email: email,
      password: password,
    };

    // alert("Login Successful.");
    // window.location.href = "./admin";

    //  TODO Properly call API


    setLoading(true)
    axios
      .post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);

        if (response.status == 200) {
          if (response.data.res_code == 1) {
            // console.log(response.data.result)
            console.log("Login successful");
            setLoading(false)
            sessionStorage.setItem("isLoggedIn", "true");
            window.location.href = "/admin";
          } else if (response.data.res_code == 2) {
            console.log("Email Does Not Exist");
            setLoading(false)
            alert("Email Does Not Exist");
          } else if (response.data.res_code == 3) {
            setLoading(false)
            console.log("Incorrect Password");
            alert("Incorrect Password");
          } else {
            // then.. what res code can it be..?
          }
        }
        // TODO handle different res codes
        else if (response.status == 204) {
          console.log("Email and Password do not match");
          alert("Email and Password do not match");
        } else {
          console.log("unhandled error from " + response.status);
          alert("unhandled error from " + response.status);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  const handleForgotPassword = () => {
    alert("Please contact one of the developers of the website -- Haseung, Tim, David ")
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <MuiThemeProvider>
          <div
            align="center"
            style={{
              margin: "200px",
            }}
          >
            <h3 style={{ color: "grey" }}>Merchandise Society Admin Login</h3>
            <p style={{ color: "grey" }}>This is a login page for
              administrators of Merchandising Society Club. <br />This page and beyond is not inteded for normal users.
              <br /> Please contact MSC for any inquiries.</p>

            <br />
            <br />
            {/* <AppBar title="Login" /> */}
            <TextField

              hintText="Enter your Email"
              floatingLabelText="Email"
              onChange={(event, newValue) =>
                setEmail(newValue)
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              color="#d4d4d4"

              floatingLabelText="Password"
              onChange={(event, newValue) =>
                setPassword(newValue)
              }
            />
            <br />
            {loading ? (<RaisedButton
              label="Loading..."
              primary={false}
              style={style}
            />) :
              (<div>
                <RaisedButton
                  label="Login"
                  backgroundColor="#d4d4d4"
                  style={style}
                  onClick={() => handleLogin()}
                />
                <button style={{ outline: "none" }} type="button" class="btn-link" onClick={() => handleForgotPassword()}>Forgot Account Info?</button>

              </div>
              )
            }
          </div>
        </MuiThemeProvider>
      </div>
    </motion.div>
  );


}

