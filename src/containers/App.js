import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// COMPONENTS
import Question from '../components/Question';
import Quiz from '../components/Quiz';
import Login from '../components/Login';
import '../../css/styles.css'

const axios = require('axios');

import { handleNew,
         handleLogout,
         userChange,
         passChange,
         emailChange,
         userSubmit,
         userSave} from '../actions/userActions'

import { handleSubmit,
         handleAnswer,
         getData} from '../actions/quizActions'

const mapStateToProps = store => ({
  username: store.login.username,
  password: store.login.password,
  email: store.login.email,
  isNew: store.login.isNew,
  logSuccess: store.login.logSuccess,

  solution: store.quiz.solution,
  response: store.quiz.response,
  quiz: store.quiz.quiz,
  index: store.quiz.index,
  numberOfQuestions: store.quiz.numberOfQuestions,
  score: store.quiz.score,
  completed: store.quiz.completed,
  correct: store.quiz.correct
});

const mapDispatchToProps = dispatch => {
  return {
    handleNew: (event) => {
      event.preventDefault();
      dispatch(handleNew());
    },

    handleLogout: (event) => {
      event.preventDefault();
      dispatch(handleLogout());
    },

    userChange: (event) => {
      dispatch(userChange(event.target.value));
    },

    passChange: (event) => {
      dispatch (passChange(event.target.value));
    },

    emailChange: (event) => {
      dispatch (emailChange(event.target.value));
    },

    userSubmit: (event,username,password) => {
      event.preventDefault();
      console.log(username,password)
      const headers = { 'Content-Type': 'application/json'}
      fetch('/login',{
              method:"POST",
              headers,
              body:JSON.stringify({username:username,password:password})
            })
            .then((res) => {
                dispatch(userSubmit(res.status));
            })
            .catch(err => console.log('errrrrrrrrrrorrrrrrr',err))
    },

    userSave: (event,username,password,email) => {
      event.preventDefault();
      const headers = { 'Content-Type': 'application/json'}
      fetch('/register',{
              method:"POST",
              headers,
              body:JSON.stringify({username:username,password:password,email:email})
            })
            .then((res) => {
              dispatch(userSave(res.status))
            })
            .catch(err => console.log('errrrrrrrrrrorrrrrrr',err))
    },

  handleSubmit: (index,numberOfQuestions,response,solution,score) => {

    dispatch(handleSubmit());

    let tempIndex = index;

    if (index + 1 < numberOfQuestions) {
      tempIndex ++;
      dispatch(handleSubmit({index:tempIndex}));
    }
    else {
      dispatch(handleSubmit({completed:true}))
    }

    if (response===solution) {
      let tempScore = score + 10;
      dispatch(handleSubmit({score:tempScore,correct:1}))
    }
    else {
      dispatch(handleSubmit({correct:2}))
    }
  },

  // handleSubmit = () => {
  //   const { solution, response, quiz,index,numberOfQuestions,score } = this.state;
  //   const stateNew = Object.assign({}, this.state);
  //   if (index + 1 < numberOfQuestions) {
  //     stateNew.index = index + 1;
  //     this.setState(stateNew);
  //   } else {
  //     stateNew.completed = true;
  //     this.setState(stateNew);
  //   }
  //     if (response===solution) {
  //       let tempScore = score + 10;
  //       stateNew.score = tempScore;
  //       stateNew.correct = 1;
  //       this.setState(stateNew);
  //     }
  //     //when incorrect
  //     else {
  //       stateNew.correct = 2;
  //       this.setState(stateNew);
  //     }
  // handleAnswerSelected = (event) => {
  //   this.setState({response:parseInt(event.target.value)})
  // }

  handleAnswer: (event) => {
    dispatch(handleAnswer(parseInt(event.target.value)));
  },

  getData: (data) => {
    dispatch(getData(data));
  }
 }
}

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   username:"",
    //   password:"",
    //   email:"",
    //   isNew:false,
    //   logSuccess:false,
    //   quiz: [
    //         {
    //           question: "5 * 4 =",
    //           answers: [
    //           "sadsfafd","asdfasdf"
    //           ]
    //       },
    //       {
    //         question: "5 + 5 =",
    //         answers: [
    //           "asdfasdf","asdsfasdfsd"
    //         ]
    //       }
    //   ],
    //     index: 0,
    //     numberOfQuestions: 7,
    //     score: 0,
    //     solution:0,
    //     response:0,
    //     completed: false,
    //     correct:-1
    //   }

    }

  componentWillMount () {
    // let curr_question = this.state.quiz.questions[this.state.quiz.index].answers;
    // console.log('current question',curr_question)

    //shuffle the array

    axios.get('/api/v1/fun')
      .then(res => {
        console.log(res.data)
        this.props.getData(res.data);
      })
  }

  render() {
    const styles = {
      submit: {
        margin: 12
      }
    }
    return (
      <MuiThemeProvider>
      <div className="app">
        <div className="title">
          <div className="sdr">System Design Review</div>
          <div className="interview">interviewing the full stack engineer</div>
        </div>
        <RaisedButton className="takeQuizBtn" label="Take New Quiz" primary={true} style={styles.submit}/>
        <div className="loginWrapper">
          <Login userChange={this.props.userChange}
                  passChange={this.props.passChange}
                  emailChange={this.props.emailChange}
                  score={this.props.score}
                  userSave = {(e)=>this.props.userSave(e,this.props.username,this.props.password,this.props.email)}
                  userSubmit={(e)=>this.props.userSubmit(e,this.props.username,this.props.password)}
                  handleNew={this.props.handleNew}
                  handleLogout = {this.props.handleLogout}
                  isNew = {this.props.isNew}
                  logSuccess = {this.props.logSuccess}
                  username = {this.props.username}
                  password = {this.props.password}
                  email = {this.props.email}
                />
        </div>
        <Quiz quiz = {this.props.quiz}
              index = {this.props.index}
              numberOfQuestions = {this.props.numberOfQuestions}
              score = {this.props.score}
              completed = {this.props.completed}
              handleAnswerSelected = {this.props.handleAnswer}
              handleSubmit = {()=>this.props.handleSubmit(this.props.index,this.props.numberOfQuestions,this.props.response,this.props.solution,this.props.score)}
              logSuccess = {this.props.logSuccess}
              correct = {this.props.correct}/>
      </div>
      </MuiThemeProvider>
    )
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
