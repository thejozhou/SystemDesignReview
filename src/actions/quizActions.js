export const handleSubmit = (newState) => {
  return {
    type: 'HANDLE_SUBMIT',
    payload: newState
  }
}

export const handleAnswer = (response) => {
  return {
    type: 'HANDLE_ANSWER',
    payload: response
  }
}

export const getData = (quiz) => {
  return {
    type: 'GET_DATA',
    payload: quiz
  }
}
