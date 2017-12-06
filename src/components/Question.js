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
    console.log('this is working')
    const { question, index, onAnswerSelected, onSubmit } = this.props;
    const styles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        marginBottom: 16,
      },
      submit: {
        margin: 12
      }
    };

    return (
      <MuiThemeProvider>
        <div>
          <span className='question'>
            <h1>{question.question}</h1>
          </span>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
              value="light"
              label={question.answers[0].label}
              style={styles.radioButton}
            />
            <RadioButton
              value="blah"
              label={question.answers[1].label}
              style={styles.radioButton}
            />
            <RadioButton
              value="ludicrous"
              label={question.answers[2].label}
              style={styles.radioButton}
            />
            <RadioButton
              value="anything"
              label={question.answers[3].label}
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <RaisedButton label="Submit" primary={true} style={styles.submit} onClick={onSubmit} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Question
