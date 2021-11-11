import {auth, googleAuthProvider } from '../lib/firebase';

export default function Enter(props) {
  const user = null;
  const username = null;

  // 1. user signed out <SignInButton />
  // User signed 
  return (
    <main>
      {user ? 
      !username ? <UsernameForm/> : <SignOutButton/>
      : 
      <SignInButton/> 
    } 

    </main>
  )
}

function SignInButton() {
  // Gotta wait for async to fecth data from the googleAuthProvider
  const signInWithgoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  }

  return (
    <button className="btn-google" onClick={signInWithgoogle}>
      <img src={'google.png'}/> Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return (
  <button onClick={() => auth.signout()}>Sign out</button>)

}

function UsernameForm(){
  return(
    <button> Form </button>
  )

}