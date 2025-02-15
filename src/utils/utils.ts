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
