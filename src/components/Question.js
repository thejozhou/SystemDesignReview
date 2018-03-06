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
    const { correct, question, index, onAnswerSelected, onSubmit, nextSubmit, checked } = this.props;
    const styles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        width: '95%',
        borderBottom: '2px solid #A0A0A0',
        marginLeft: '2.5%',
        padding: '1.5em 0',
        // border: '1px solid black',
        backgroundColor: 'none',
      },
      submit: {
        margin: '3%',
        marginLeft: '30%',
        width: '40%',
        borderRadius: 25
      },
      label: {
        'font-weight': 'bold',
        color: '#A0A0A0',
        margin: '8px auto'
      },
      submitLabel: {
        color: 'white',
        fontFamily: 'Verdana',
        fontSize: '20px',
        fontWeight: 'bold'
      },
      icon: {
        height: '40px',
        width: '40px',
        fill: '#00A3CA'
      }
    };

    console.log(correct)

function rightOrWrong(correct) {
  console.log('this is the correct state ',correct)
    if (correct===1)
    return (<div id="correctMsg" className="feedbackMsg" >Correct Answer!</div>)
    else if (correct===2)
    return (<div id="incorrectMsg" className="feedbackMsg">Try Again</div>)
}

function nextPage() {
  return (

  <RaisedButton label=">" backgroundColor="#00A3CA" buttonStyle={{borderRadius: 25}} labelStyle={styles.submitLabel} style={{borderRadius: 25}} onClick={nextSubmit} />

  )
}

// var shuffleAnswers = (input) => {
//       let answersArr = [];
//       for (let i = 0; i < input.length; i += 1) {
//         answersArr.push(input[i]);
//       }
//       var count = answersArr.length, temp, index;


//       // While there are still elements in answersArr
//       while (count > 0) {
//         // Pick a random index
//         index = Math.floor(Math.random() * count);
//         // Decrease count by 1
//         count--;
//         // And swap the last element with it
//         temp = answersArr[count];
//         answersArr[count] = answersArr[index];
//         answersArr[index] = temp;
//       }
//       return answersArr;
//     }

//     var answers = shuffleAnswers(question.answers);

    return (
      <MuiThemeProvider>
        <div>
          <span className='questionWrapper'>
            <h1 className="questionText">{question.question}</h1>
          </span>
          <RadioButtonGroup name="shipSpeed" defaultSelected="any" onChange={onAnswerSelected}>
            <RadioButton
              value={0}
              label={question.answers[0]}
              style={styles.radioButton}
              labelStyle={styles.label}
              iconStyle={styles.icon}
            />
            <RadioButton
              value={1}
              label={question.answers[1]}
              style={styles.radioButton}
              labelStyle={styles.label}
              iconStyle={styles.icon}
            />
            <RadioButton
              value={2}
              label={question.answers[2]}
              style={styles.radioButton}
              labelStyle={styles.label}
              iconStyle={styles.icon}
            />
            <RadioButton
              value={3}
              label={question.answers[3]}
              style={styles.radioButton}
              labelStyle={styles.label}
              iconStyle={styles.icon}
            />
          </RadioButtonGroup>

          {rightOrWrong(this.props.correct)}
          <RaisedButton label="Submit" labelStyle={styles.submitLabel}backgroundColor="#00A3CA" style={styles.submit} buttonStyle={{borderRadius: 25}} onClick={onSubmit} />
          {nextPage()}

        </div>
      </MuiThemeProvider>
    )
  }
}

export default Question
