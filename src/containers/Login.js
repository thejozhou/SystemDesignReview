import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../../css/styles.css'


class Login extends Component {

    //function

    render() {

      const {
        userChange,
        passChange,
        userSubmit,
        userSave,
        isNew,
        logSuccess,
        handleNew,
        username,
        handleLogout
      } = this.props;

      // render login page when member is not new and not logged in
      if (!isNew && !logSuccess) {
        return (
            <div className="innerBox">
              <span style={{'margin-left':'50%'}}><h2>LOGIN</h2></span>
              <form>
                <TextField className="userName" onChange={userChange} name="username" type= "text" placeholder="username"/><br/>
                <TextField className="pword" onChange={passChange} name="password" type="password" placeholder="password"/><br/>
                <RaisedButton primary={true} className="but" onClick={userSubmit} label="LOGIN" type="submit"/>
              </form>
            <br/>
              <a href="" onClick={handleNew}>create new account</a>
            </div>
        );
      }

      //render new account page if member is new and not logged in
      else if (isNew&& !logSuccess) {
        return (
          <div className="innerBox">
              <h3>CREATE NEW ACCOUNT</h3>
              <form>
                <TextField className="userName" onChange={userChange} name="username" type= "text" placeholder="username"/><br/>
                <TextField className="pword" onChange={passChange} name="password" type="password" placeholder="password"/><br/>
                <RaisedButton primary = {true} className="but" onClick={userSave} label="Add Account" type="submit"/>
              </form>
          </div>
        )
      }

      //render welcome page if member is logged in
      else if (logSuccess) {
        return (
          <div className="innerBox">
            <h3>Welcome, {username}</h3>
            <h4>Score: </h4>
            <a href="" onClick={handleLogout}>logout</a>
          </div>
        )
      }
    }

}

// Get apps state and pass it as props to Login
//      > whenever state changes, the Login will automatically re-render
function mapStateToProps(state) {
    // return {
    //     username: state.username,
    //     password: state.password
    //   };
}

// Get actions and pass them as props to to Login
//      > now Login has this.props.selectUser
function mapDispatchToProps(dispatch){
    // return bindActionCreators({selectUser: selectUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(Login);
