import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
        username
      } = this.props;

      
      if (!isNew && !logSuccess) {
        return (
            <div className="innerBox">
              <h2>LOGIN</h2>

              <form>
                <input className="userName" onChange={userChange} name="username" type= "text" placeholder="username"/><br/>
                <input className="pword" onChange={passChange} name="password" type="password" placeholder="password"/><br/>
                <input className="but" onClick={userSubmit} value="LOGIN" type="submit"/>
              </form>
            <br/>
              <a href="" onClick={handleNew}>create new account</a>
            </div>
        );
      }
      else if (isNew&& !logSuccess) {
        return (
          <div className="innerBox">
              <h3>CREATE NEW ACCOUNT</h3>
              <form>
                <input className="userName" onChange={userChange} name="username" type= "text" placeholder="username"/><br/>
                <input className="pword" onChange={passChange} name="password" type="password" placeholder="password"/><br/>
                <input className="but" onClick={userSave} value="add account" type="submit"/>
              </form>
          </div>
        )
      }
      else if (logSuccess) {
        return (
          <div className="innerBox">
            <h3>Welcome, {username}</h3>
            <h4>Score: </h4>
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
