import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';

class Quiz extends Component {

  render() {
    const { quiz, index, numberOfQuestions, score, completed, handleAnswerSelected, handleSubmit } = this.props
    console.log('index', index);
    return (
      <div>
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
  }
}


export default Quiz
