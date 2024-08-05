import React from 'react'
import logo from "../Images/logobbc.png";
import logoo from '../Images/logoo.jpg';
import{ signInWithPopup} from "firebase/auth";
import{ auth, googleProvider} from "../firebase/setup";
import { useNavigate } from 'react-router-dom';

const Signin = () => {

const navigate = useNavigate()

  const googleSignin= () =>{
      signInWithPopup( auth, googleProvider)
      .then(() => {
        if(auth.currentUser) {
          navigate("/");
        }
      })
    
    .catch((err) => {
      console.log(err);
    });
   
  };

console.log(auth)

  return (
    <div className='grid grid-cols-2 bg-black h-screen'>
        <div className='text-center'>
 <img src= {logoo}  className='h-14 ml-60 mt-32' />
 <h1 className='text-white text-3xl mt-7'>Sign in</h1>
 <button onClick={googleSignin} className="bg-blue-600 hover:bg-blue-700
  text-white font-bold py-2 px-4 border border-blue-700 rounded h-13 w-96 mt-14">
  Sign in
</button>
<h2 className='text-blue-500 underline mt-9'> Sign in now!!</h2>
        </div>

        <div>
        <img src= {logo} className='h-screen'/>
        </div>
      
    </div>
  )
}

export default Signin