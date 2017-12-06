import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';


class Question extends Component {
  render () {
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
    const {state, questions} = this.props;

    return (
      <MuiThemeProvider>
        <div>
          <span class='question'>
            <h1>{questions[0].question}</h1>
          </span>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
              value="light"
              label={questions[0].answerChoices[0]}
              style={styles.radioButton}
            />
            <RadioButton
              value="blah"
              label={questions[0].answerChoices[1]}
              style={styles.radioButton}
            />
            <RadioButton
              value="ludicrous"
              label={questions[0].answerChoices[2]}
              style={styles.radioButton}
            />
            <RadioButton
              value="anything"
              label={questions[0].answerChoices[3]}
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <RaisedButton label="Are you sure?" primary={true} style={styles.submit} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Question;