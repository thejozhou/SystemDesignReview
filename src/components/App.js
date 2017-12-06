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
          }
      ],
      index: 0,
      numberOfQuestions: 0,
      score: 0,
      answers: [],
      completed: false
      }
    }
    //
    // this.userChange = this.userChange.bind(this);
    // this.passChange = this.passChange.bind(this);
    // this.userSubmit = this.userSubmit.bind(this);
    // this.userSave = this.userSave.bind(this);
    // this.handleNew = this.handleNew.bind(this);

  }

  handleNew = (e) => {
    e.preventDefault()
    this.setState({isNew:true});
  }

  userChange = (e) => {

    this.setState({username:e.target.value});
  }

  passChange = (e) => {
    this.setState({password:e.target.value});
  }

  userSubmit = (e) => {
    e.preventDefault()
    //axios.post('/confirm',{username:this.state.username,password:this.state.password})
    this.setState({logSuccess:true})

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
              handleSubmit = {this.handleSubmit}/>
    </div>
    )
   }
}

export default App;
