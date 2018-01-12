export const handleNew = () => {
  return {
    type: 'HANDLE_NEW'
  }
}

export const handleLogout = () => {
  return {
    type: 'HANDLE_LOGOUT'
  }
}

export const userChange = (username) => {
  return {
    type: 'USER_CHANGE',
    payload: username
  }
}

export const passChange = (password) => {
  return {
    type: 'PASS_CHANGE',
    payload: password
  }
}

export const emailChange = (email) => {
  return {
    type: 'EMAIL_CHANGE',
    payload: email
  }
}

export const userSubmit = (status) => {
  return {
    type: 'USER_SUBMIT',
    payload: status
  }
}

export const userSave = (status) => {
  return {
    type: 'USER_SAVE',
    payload: status
  }
}
