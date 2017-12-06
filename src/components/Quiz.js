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
            <p>Congratulations, you finish the quiz</p>
            Your score is {score}
          </div>
        :
          <div>
          <h2>Question {index + 1} of {numberOfQuestions}</h2>

            <Question
              question={quiz.questions[0]}
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
        <div className="sdr">
          System Design Review
        </div>

      )
    }
  }
}


export default Quiz
