import {combineReducers} from 'redux';

import loginReducer from './loginReducer';
import quizReducer from './quizReducer';

const allReducers = combineReducers({
  login: loginReducer,
  quiz: quizReducer
});

export default allReducers
