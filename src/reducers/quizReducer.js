const initialState = {
  quiz: [
        {
          question: "5 * 4 =",
          answers: [
          "sadsfafd","asdfasdf"
          ]
      },
      {
        question: "5 + 5 =",
        answers: [
          "asdfasdf","asdsfasdfsd"
        ]
      }
  ],
  index: 0,
  numberOfQuestions: 7,
  score: 0,
  solution:0,
  response:0,
  completed: false,
  correct:-1
}

const quizReducer = (state=initialState,action) => {
  switch (action.type) {
  case 'HANDLE_SUBMIT':
    return {...state,...action.payload};

  case 'HANDLE_ANSWER':
    return {...state,response:action.payload};

  case 'GET_DATA':
    return {...state, quiz: action.payload};
    
  default: return state;
  }
}

export default quizReducer;
