import React, { useEffect, Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:8000/api/SOMELINK";
    var self = this;
    var payload = {
      email: this.state.email,
      password: this.state.password,
    };

    alert("Login Successful.");
    window.location.href = "./admin";

    /* TODO Properly call API


		axios.post(apiBaseUrl+'login', payload)
			.then( function (response) {
				console.log(response);
				if(response.data.code == 200){
					console.log("Login successful");
					var uploadScreen=[];
					uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
					self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
				}
				// TODO handle different res codes
				// else if(response.data.code == 204){
				// 	console.log("Username password do not match");
				// 	alert("username password do not match")
				// }
				else{
					console.log("Username does not exists");
					alert("Username does not exist");
				}
			})
		.catch(function (error) {
			console.log(error);
		});
		*/
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
