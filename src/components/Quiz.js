import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';


/*
{
  "title": "Elementary Math Quiz",
  "questions": [
    {
      "question": "5 * 4 =",
      "answers": [
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
    ...
  ]
}
*/


class Quiz extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
    const { quiz, index, numberOfQuestions, score } = this.state
    return (
      <div>
        {this.state.completed ?
          <div>
            <p>Congratulations, you finish the quiz</p>
            Your score is {score}
          </div>
        :
          <div>
          <h2>Question {this.state.index + 1} of {numberOfQuestions}</h2>

            <Question
              question={quiz.questions[0]}
              index={index}
              onAnswerSelected={(event) => this.handleAnswerSelected(event)}
              onSubmit={() => this.handleSubmit()}
            />

          </div>
        }
      </div>
    )
  }
}


export default Quiz