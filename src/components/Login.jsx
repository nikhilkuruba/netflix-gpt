import Header from "@/components/Header"
import { useRef, useState } from "react"
import { validateEmailandPassword } from "@/utils/utils"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "@/utils/firebase";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [errorMsg, setErrorMsg] = useState("")
  
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const inputBoxClassName = "h-14 w-full leading-6 pt-6 px-4 pb-4 border text-base rounded"
  const handleSignIn = () => {
    const errorMessage = validateEmailandPassword(emailRef.current.value, passwordRef.current.value)
    setErrorMsg('')
    if (errorMessage) {
      setErrorMsg(errorMessage)
      return
    }
    handleAuthentication(emailRef.current.value, passwordRef.current.value)
  }

  const handleAuthentication = function (email, password) {
    if (!isLogin) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
          const user = userCredential.user;
          return user
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
          setErrorMsg(errorMessage)
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {     
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage)
        });
    }
  }

  return (
    <div className="login relative">
      <Header />
      <div>
        <img  className="h-[100svh] w-[100lvw]" src="https://assets.nflxext.com/ffe/siteui/vlv3/bd274f9d-288c-4bf0-aff6-0409393fb99d/web_tall_panel/IN-en-20250203-TRIFECTA-perspective_c86aa3ba-1972-4f96-927f-9feefea482db_large.jpg" alt="background" />
      </div>
      <div className="login-form-container bottom-0 fixed left-1/2 transform  -translate-x-1/2 overflow-auto bg-black/70 rounded-[4px] px-17 pt-12">
      <h1 className="text-white !text-[2rem] font-bold mb-6 text-left font-bold">{isLogin ? 'Sign In' : 'Sign up'}</h1>
      <form onSubmit={(e) => e.preventDefault()} className="login-form flex flex-col gap-4 w-80" action="">
        {!isLogin && (<input type="text" name="name" placeholder="User name" className={inputBoxClassName} />)}
        <input ref={emailRef} type="text" name="email" placeholder="Email address" className={inputBoxClassName} />
        <input ref={passwordRef} type="password" name="password" placeholder="Password" className={inputBoxClassName} />
        {errorMsg && <p className="text-red-500 italic">{errorMsg}</p>}
        <button className="h-10 w-full text-white bg-[rgb(229,9,20)] rounded text-base" onClick={handleSignIn}>{isLogin ? 'Sign In' : 'Sign up'}</button>
      </form>
      <div className="text-white text-sm text-left my-4">
        {!isLogin ?`Already a user?` : 'New user?'} 
        <a href="#"  onClick={() => setIsLogin(isLogin => !isLogin)}>{!isLogin? 'Click to sign in' : 'Click to signup'}</a>
      </div>
      </div>
    </div>
  )
}

export default Login