import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// MATERIAL UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// COMPONENTS
import Question from './Question'
import Quiz from './Quiz';
import Login from '../containers/Login';
import Background from '../../css/brain.png'
import '../../css/styles.css'
const axios = require('axios');


// ----- APP COMPONENT BELOW -----
let manipulateData = (data) => {
  return data.map((problem, i) => {
    return {
      question: problem.question,
      answers: [
        {text: problem.answers[0], isCorrect: 10},
        {text: problem.answers[1], isCorrect: 11},
        {text: problem.answers[2], isCorrect: 12},
        {text: problem.answers[3], isCorrect: 13}
      ]
    }
  });
}

let shuffleAnswers = (array) => {
  let newIndexes = [];
  for (let i = 0; i < array.length; i++) {
    let randomizedNum = Math.floor(Math.random() * 4);
    if(newIndexes.indexOf(randomizedNum) === -1 && newIndexes.length < 4) {
      newIndexes.push(randomizedNum);
    } else {
      i--;
    }
  }
  const letterObj = {};
  newIndexes.forEach((newIndex, i) => {
    letterObj[newIndex] = array[i];
  })
  return letterObj;
}

let iterateAndShuffle = (changedData) => {
  return changedData.map((problem, i) => {
    return {
      question: problem.question,
      answers: shuffleAnswers(problem.answers)
    }
  })
}


// ----- BEGIN APP COMPONENT -----
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:"",
      password:"",
      email:"",
      isNew:false,
      logSuccess:false,
      nextPageOn: false,
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
        numberOfQuestions: 2,
        score: 0,
        solution:0,
        response:0,
        answers: [],
        completed: false,
        correct:-1
      }
    }
  }

  componentDidMount () {
    axios.get('/api/v1/fun')
      .then(res => {
        console.log('data', res.data)
        let changedData = manipulateData(res.data);
        let shuffledData = iterateAndShuffle(changedData);

        const stateNew = Object.assign({}, this.state);
        stateNew.quiz.questions = shuffledData;
        stateNew.quiz.numberOfQuestions = res.data.length;
        this.setState(stateNew);
      });
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
          .catch(err =>  console.log('errrrrrrrrrrorrrrrrr',err))
    //axios.post('/save',{username:this.state.username,password:this.state.password})
  }

  nextSubmit = () => {
    // const { quiz } = this.state;
    const stateNew = Object.assign({}, this.state);
    if (stateNew.quiz.index + 1 < stateNew.quiz.numberOfQuestions) {
      stateNew.quiz.index += 1;
      stateNew.quiz.correct = 0;
      // console.log('newIndex', stateNew.quiz.index)
      this.setState(stateNew)
    } else {
      stateNew.quiz.completed = true;
      this.setState(stateNew);
    }
  }

  handleSubmit = () => {
    let stateNew = Object.assign({}, this.state);
    // console.log('resopnse, solution   ', stateNew.quiz.response, stateNew.quiz.solution)
      if (stateNew.quiz.response === 10) {
        // console.log('cooorrrect')
        //when correct
        stateNew.quiz.score += 10;
        stateNew.quiz.correct = 1;
        this.setState(stateNew);
        this.setState({nextPageOn:true});
      }
      //when incorrect
      else {
        stateNew.quiz.correct = 2;
        this.setState(stateNew);
      }
  }

  handleAnswerSelected = (event) => {
    let tempState = this.state;
    tempState.quiz.response = parseInt(event.target.value)
    this.setState(tempState)
  }

  retakeQuiz = () => {
    const stateNew = Object.assign({}, this.state);
    stateNew.quiz.index = 0;
    stateNew.quiz.score = 0;
    stateNew.quiz.correct = -1;
    stateNew.quiz.completed = false;
    this.setState(stateNew);
  }

  render() {
    const styles = {
      submit: {
        margin: 12
      }
    }
    return (
      <MuiThemeProvider>
      <div>
        <div className="app">
          <div className="loginWrapper">
            <Login userChange={this.userChange}
                    passChange={this.passChange}
                    emailChange={this.emailChange}
                    score={this.state.quiz.score}
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
                index = {this.state.quiz.index}
                numberOfQuestions = {this.state.quiz.numberOfQuestions}
                score = {this.state.quiz.score}
                completed = {this.state.quiz.completed}
                handleAnswerSelected = {this.handleAnswerSelected}
                handleSubmit = {this.handleSubmit}
                nextSubmit = {this.nextSubmit}
                logSuccess = {this.state.logSuccess}
                retakeQuiz = {this.retakeQuiz}
                correct = {this.state.quiz.correct}
              />
              <img className="background" /*src={Background}*/ />
        </div>
      </div>
      </MuiThemeProvider>
    )
   }
}

export default App;
