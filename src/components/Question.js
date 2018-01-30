import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Quiz from './Quiz'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

class Question extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { correct, question, index, onAnswerSelected, onSubmit, nextSubmit } = this.props;
    const styles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        marginBottom: 16,
        padding: '2.5em 0',
        // border: '1px solid black',
        backgroundColor: '#eee',
        borderRadius: '10px'
      },
      submit: {
        margin: 12
      },
      label: {
        'font-size': '20px',
        'font-weight': 'bold'
      }
    };

    console.log(correct)

function rightOrWrong(correct) {
  console.log('this is the correct state ',correct)
    if (correct===1)
    return (<div>Correct Answer!</div>)
    else if (correct===2)
    return (<div>Incorrect Answer!</div>)
}

function nextPage() {
  return (

  <RaisedButton label=">" primary={true} onClick={nextSubmit} />

  )
}

var shuffleAnswers = (input) => {
      let answersArr = [];
      for (let i = 0; i < input.length; i += 1) {
        answersArr.push(input[i]);
      }
      var count = answersArr.length, temp, index;


      // While there are still elements in answersArr
      while (count > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * count);
        // Decrease count by 1
        count--;
        // And swap the last element with it
        temp = answersArr[count];
        answersArr[count] = answersArr[index];
        answersArr[index] = temp;
      }
      return answersArr;
    }

    var answers = shuffleAnswers(question.answers);

    return (
      <MuiThemeProvider>
        <div>
          <span className='questionWrapper'>
            <h1 className="questionText">{question.question}</h1>
          </span>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={props.onAnswerSelected}>
            <RadioButton
              value={0}
              label={question.answers[0]}
              style={styles.radioButton}
              labelStyle={styles.label}
            />
            <RadioButton
              value={1}
              label={question.answers[1]}
              style={styles.radioButton}
              labelStyle={styles.label}
            />
            <RadioButton
              value={2}
              label={question.answers[2]}
              style={styles.radioButton}
              labelStyle={styles.label}
            />
            <RadioButton
              value={3}
              label={question.answers[3]}
              style={styles.radioButton}
              labelStyle={styles.label}
            />
          </RadioButtonGroup>

          {rightOrWrong(this.props.correct)}
          <RaisedButton label="Submit" primary={true} style={styles.submit} onClick={onSubmit} />
          {nextPage()}

        </div>
      </MuiThemeProvider>
    )
  }
}


export default Question
