import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// COMPONENTS
import Question from './Question'
import Quiz from './Quiz';
import Login from '../containers/Login';
import '../../css/styles.css'
const axios = require('axios');


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:"",
      password:"",
      email:"",
      isNew:false,
      logSuccess:false,
      quiz: [
            {
              question: "5 * 4 =",
              answers: [
              "sadsfafd","asdfasdf"
              ]
          },
          {
            question: "5 + 5 =",
            answers: [
              "asdfasdf","asdsfasdfsd"
            ]
          }
      ],
        index: 0,
        numberOfQuestions: 2,
        score: 0,
        solution:0,
        completed: false
      }
    }



  componentWillMount () {
    // let curr_question = this.state.quiz.questions[this.state.quiz.index].answers;
    // console.log('current question',curr_question)

    //shuffle the array

    axios.get('/api/v1/fun')
      .then(res => {
        console.log(res.data)

        this.setState({quiz:res.data});

        console.log(this.state)
      })
      //  .then(data => {
      //    console.log(data)
      //   quiz = Object.assign(this.state, data);
      //   this.setState(quiz);
      // })
  }



  handleNew = (e) => {
    e.preventDefault()
    this.setState({isNew:true});
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.setState({isNew:false, logSuccess:false})
  }

  userChange = (e) => {

    this.setState({username:e.target.value});
  }

  passChange = (e) => {
    this.setState({password:e.target.value});
  }

  emailChange = (e) => {
    this.setState({email:e.target.value});
  }

  userSubmit = (e) => {
    e.preventDefault()
    const headers = { 'Content-Type': 'application/json'}
    fetch('/login',{
            method:"POST",
            headers,
            body:JSON.stringify({username:this.state.username,password:this.state.password})
          })
          .then((res) => {
            if (res.status===200) this.setState({logSuccess:true})
            else {
              this.setState({username:'',password:''})
            }
          })
          .catch(err => console.log('errrrrrrrrrrorrrrrrr',err))
    }

  userSave = (e) => {
    e.preventDefault();
      const headers = { 'Content-Type': 'application/json'}
    fetch('/register',{
            method:"POST",
            headers,
            body:JSON.stringify({username:this.state.username,password:this.state.password,email:this.state.email})
          })
          .then((res) => {
            if (res.status===200) this.setState({logSuccess:true})
            else {
              this.setState({username:'',password:''})
            }
          })
          .catch(err => console.log('errrrrrrrrrrorrrrrrr',err))
    //axios.post('/save',{username:this.state.username,password:this.state.password})
  }

  handleSubmit = () => {
    const { quiz,index,numberOfQuestions,score } = this.state;
    const stateNew = Object.assign({}, this.state);
    console.log('index', index)
    if (index + 1 < numberOfQuestions) {
      stateNew.index = index + 1;
      console.log('newIndex', stateNew.index)
      this.setState(stateNew)
    } else {
      stateNew.completed = true;
      this.setState(stateNew);
      let score = score;
      // stateNew.answers.map((answer, i) => (
      //   score = score + quiz.questions[i].answers[answer].point
      // ))
      // console.log('score', score);
      // stateNew.quiz.score = score;
      // this.setState(stateNew)
    }
  }

  handleAnswerSelected = (event) => {
    console.log(event.target.value)
    // const { quiz,index } = this.state;
    // let list = [...quiz.answers.slice(0, index),
    //             event.target.value,
    //             ...quiz.answers.slice(index + 1)]
    // this.setState({'answers': list})
    console.log('target  score ',typeof(event.target.value), typeof(this.state.solution))
    if (parseInt(event.target.value)===this.state.solution) {
      this.state.score+=10;
    }
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
          <Login userChange={this.userChange}
                  passChange={this.passChange}
                  emailChange={this.emailChange}
                  score={this.state.score}
                  userSave = {this.userSave}
                  userSubmit={this.userSubmit}
                  handleNew={this.handleNew}
                  handleLogout = {this.handleLogout}
                  isNew = {this.state.isNew}
                  logSuccess = {this.state.logSuccess}
                  username = {this.state.username}
                  password = {this.state.password}
                  email = {this.state.email}
                />
        </div>
        <Quiz quiz = {this.state.quiz}
              index = {this.state.index}
              numberOfQuestions = {this.state.numberOfQuestions}
              score = {this.state.score}
              completed = {this.state.completed}
              handleAnswerSelected = {this.handleAnswerSelected}
              handleSubmit = {this.handleSubmit}
              logSuccess = {this.state.logSuccess}/>
      </div>
      </MuiThemeProvider>
    )
   }
}

export default App;
