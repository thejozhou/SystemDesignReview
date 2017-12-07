import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';

import '../../css/styles.css'
class Quiz extends Component {

  render() {
    const { quiz, index, numberOfQuestions, score, completed, handleAnswerSelected, handleSubmit,logSuccess } = this.props
//if the user is verified then the questions are retrieved
    if (logSuccess)
    return (
      <div className="theQuiz">
        {completed ?
          <div>
            <h2>Congratulations, you finished the quiz</h2>
            <h2>Your score is <span className="score">{score}</span></h2>
          </div>
        :
          <div>
          <h2>Question {index + 1}</h2>

            <Question
              question={quiz.questions[index]}
              index={index}
              onAnswerSelected={(event) => handleAnswerSelected(event)}
              onSubmit={() => handleSubmit()}
            />

          </div>
        }
      </div>
    )
    //if the user is not verified then the logo screen is rendered
    else {
      return (
        <div className="title">
          <div className="sdr">System Design Review</div>
          <div className="interview">interviewing the full stack engineer</div>
        </div>


      )
    }
  }
}


export default Quiz
