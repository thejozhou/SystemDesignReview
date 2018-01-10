
const initialState = {
  username: "",
  password: "",
  email: "",
  isNew:false,
  logSuccess: false
}

const loginReducer = (state = initialState,action) => {

  switch (action.type) {
    case 'HANDLE_NEW':
     return {...state, isNew:true};

    case 'USER_SUBMIT':
        if (action.payload===200)
          return {...state, logSuccess: true};
            else
          return {...state, username:'', password:''}

    case 'USER_SAVE':
      if (action.payload===200)
        return {...state, logSuccess: true};
          else
        return {...state, username:'', password:''}

    case 'HANDLE_LOGOUT':
      return {...state, isNew:false,logSuccess:false};

    default:
      return state;
  }
}

export default loginReducer;
