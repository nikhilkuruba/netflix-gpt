export function validateUserName(username) {
  const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
  return usernameRegex.test(username)
}

export function validateUserEmail(email = '') {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email)
}

export function validateUserPassword(password = '') {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return  passwordRegex.test(password)
}

export function validateEmailandPassword(email = '', password = '') {
  let errorMessage = ''
  const isValidEmail = validateUserEmail(email);
  const isValidPassword = validateUserPassword(password);
  if (!isValidEmail && isValidPassword) {
    errorMessage = "Invalid email and password"
  } else if (!isValidEmail) {
    errorMessage = "Invalid email"
  } else if(!isValidPassword) {
    errorMessage = "Invalid password"
  }
  return errorMessage
}