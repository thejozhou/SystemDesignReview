import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';

import '../../css/styles.css'

const Quiz = props => {

    if (props.logSuccess)
    return (
      <div>
        {props.completed ?
          <div className="theQuiz">
            <h2>Congratulations, you finished the quiz</h2>
            <h2>Your score is <span className="score">{props.score}</span></h2>
          </div>
        :
          <div className="theQuiz">
          <h2>Question {props.index + 1}</h2>

            <Question
              question={props.quiz[props.index]}
              index={props.index}
              correct={props.correct}
              onAnswerSelected={(event) => props.handleAnswerSelected(event)}
              onSubmit={() => props.handleSubmit()}
            />

          </div>
        }
      </div>
    )
    //if the user is not verified then the logo screen is rendered
    else {
      return (
        <div>
        </div>
      )
    }
  }

export default Quiz
