import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../../css/styles.css'

const Login = props => {
      // render login page when member is not new and not logged in
      if (!props.isNew && !props.logSuccess) {
        return (
            <div className="innerBox">
              <span style={{'margin-left':'50%'}}><h2>LOGIN</h2></span>
              <form>
                <TextField className="userName" onChange={props.userChange} value= {props.username} name="username" type= "text" placeholder="username"/><br/>
                <TextField className="pword" onChange={props.passChange} name="password" value = {props.password} type="password" placeholder="password"/><br/>
                <RaisedButton primary={true} label="LOGIN" className="but" onClick={props.userSubmit} type="submit"/>
              </form>
            <br/>
              <a href="" onClick={props.handleNew}>create new account</a>
            </div>
        );
      }

      //render new account page if member is new and not logged in
      else if (props.isNew&& !props.logSuccess) {
        return (
          <div className="innerBox">
              <h3>CREATE NEW ACCOUNT</h3>
              <form>
                <TextField className="userName" onChange={props.userChange} value={props.username} name="username" type= "text" placeholder="username"/><br/>
                <TextField className="pword" onChange={props.passChange} value = {props.password} name="password" type="password" placeholder="password"/><br/>
                <TextField className="email" onChange={props.emailChange} value = {props.email} name="email" type="text" placeholder="email"/><br/>
                <RaisedButton primary={true} label="Add Account" className="but" onClick={props.userSave} type="submit"/>
              </form>
          </div>
        )
      }

      //render welcome page if member is logged in
      else if (props.logSuccess) {
        return (
          <div className="welcome">
            <h3>Welcome, {props.username}</h3>
            <h4>Score: {props.score}</h4>
            <a href="" onClick={props.handleLogout}>logout</a>
          </div>
        )
      }
  }



export default Login;
