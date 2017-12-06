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
            <p>Congratulations, you finish the quiz</p>
            Your score is {score}
          </div>
        :
          <div>
          <h2>Question {index + 1} of {numberOfQuestions}</h2>

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
