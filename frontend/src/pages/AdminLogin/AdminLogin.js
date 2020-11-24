import React, { useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

var axios = require("axios");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    // Check if already logged in 
    if( sessionStorage.getItem('isLoggedIn') ){
      // navigate to admin page
      window.location.href = 'https://merchandising-society.web.app/admin';
    }
  }

  handleClick(event) {
    var apiBaseUrl = "https://sunyk-msc-backend.herokuapp.com/admin/login/";
    var payload = {
      email: this.state.email,
      password: this.state.password,
    };

    // alert("Login Successful.");
    // window.location.href = "./admin";

    //  TODO Properly call API

    axios
      .post(apiBaseUrl, payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          if (response.data.res_code == 1) {
            // console.log(response.data.result)
            console.log("Login successful");
            // var uploadScreen = [];
            // uploadScreen.push(
            //   <UploadScreen appContext={self.props.appContext} />
            // );
            // self.props.appContext.setState({
            //   loginPage: [],
            //   uploadScreen: uploadScreen,
            // });

            sessionStorage.setItem('isLoggedIn', 'true');
            
          } else if (response.data.res_code == 2) {
            console.log("Email Does Not Exist");
          } else if (response.data.res_code == 3) {
            console.log("Incorrect Password");
          } else {
            // then.. what res code can it be..?
          }
        }
        // TODO handle different res codes
        else if (response.data.code == 204) {
          console.log("Username password do not match");
          alert("username password do not match");
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
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
              <h3 style={{ color: "grey" }}>Admin Login</h3>
              <br />
              <br />
              {/* <AppBar title="Login" /> */}
              <TextField
                hintText="Enter your Email"
                floatingLabelText="Email"
                onChange={(event, newValue) =>
                  this.setState({ username: newValue })
                }
              />
              <br />
              <TextField
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) =>
                  this.setState({ password: newValue })
                }
              />
              <br />
              <RaisedButton
                label="Login"
                primary={true}
                style={style}
                onClick={(event) => this.handleClick(event)}
              />
            </div>
          </MuiThemeProvider>
        </div>
      </motion.div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;
