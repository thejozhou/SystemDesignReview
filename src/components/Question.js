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
    const { correct, question, index, onAnswerSelected, onSubmit } = this.props;
    const styles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        marginBottom: 16,
        padding: '2.5em 0',
        border: '1px solid black'
      },
      submit: {
        margin: 12
      },
      label: {
        'font-size': '30px',
        'font-weight': 'bold'
      }
    };

    function rightOrWrong() {
        if (correct===1)
        return <div>Correct Answer!</div>
        else if (correct===2)
        return <div>Incorrect Answer!</div>
    }

    return (
      <MuiThemeProvider>
        <div>
          <span className='question'>
            <h1 className="questionText">{question.question}</h1>
          </span>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={onAnswerSelected}>
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
          {rightOrWrong}
          <RaisedButton label="Submit" primary={true} style={styles.submit} onClick={onSubmit} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Question
