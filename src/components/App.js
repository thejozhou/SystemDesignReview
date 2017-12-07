import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
      isNew:false,
      logSuccess:false,
      quiz: {
        questions: [
          {
            question: "5 * 4 =",
            answers: [
              {
                "point": 1,
                "label": "20"
              },
              {
                "point": 0,
                "label": "10"
              },
              {
                "point": 0,
                "label": "30"
              },
              {
                "point": 0,
                "label": "25"
              },
            ]
          },
          {
            question: "5 + 5 =",
            answers: [
              {
                "point": 0,
                "label": "2345"
              },
              {
                "point": 1,
                "label": "10"
              },
              {
                "point": 0,
                "label": "999"
              },
              {
                "point": 0,
                "label": "55"
              },
            ]
          }
      ],
      index: 0,
      numberOfQuestions: 0,
      score: 0,
      answers: [],
      completed: false
      }
    }

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
              console.log('faaaaaaaaaaaaaaaaaaaaaaaaaalse')
              this.setState({logSuccess:false})
            }
          })
          .catch(err => console.log('errrrrrrrrrrorrrrrrr',err))
    }

  userSave = (e) => {
    e.preventDefault()
    //axios.post('/save',{username:this.state.username,password:this.state.password})
  }

  handleSubmit = () => {
    if (this.state.index + 1 < this.state.numberOfQuestions) {
      this.setState({'index': this.state.index + 1})
    } else {
      this.setState({'completed': true})
      let score = this.state.score || 0
      this.state.answers.map((answer, i) => (
        score = score + this.state.quiz.questions[i].answers[answer].point
      ))
      this.setState({'score': score})
    }
  }

  handleAnswerSelected = (event) => {
    let list = [...this.state.answers.slice(0, this.state.index),
                parseInt(event.target.value),
                ...this.state.answers.slice(this.state.index + 1)]
    this.setState({'answers': list})
  }

  render() {
    return (
      <div className="app">
        <div>
          <Login userChange={this.userChange}
                  passChange={this.passChange}
                  userSave = {this.userSave}
                  userSubmit={this.userSubmit}
                  handleNew={this.handleNew}
                  handleLogout = {this.handleLogout}
                  isNew = {this.state.isNew}
                  logSuccess = {this.state.logSuccess}
                  username = {this.state.username}
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
    )
   }
}

export default App;
