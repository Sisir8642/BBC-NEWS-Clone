import React from 'react'
import logoo from "../Images/logoo.jpg";
import user from "../Images/user.jpg";
import lens from "../Images/lens.jpg";
import { Link, useNavigate } from 'react-router-dom';
import {auth} from "../firebase/setup"
import { signOut } from 'firebase/auth';



const Navbar = (props) => {

  const navigate = useNavigate()


const logout = async() =>{
  try{
    await signOut(auth)
    navigate("/")
  }
catch(err){
  console.log(err);
}
}

console.log(auth)


  return (
    <div className='grid grid-cols-3 bg-black text-white fixed'>
      <div className='flex p-2 '>
<img src={logoo} className='h-10 ml-2'/>

{auth.currentUser ? 
  <button onClick={logout} className='text-white flex hover:border border-white ml-3 p-2 w-48'>
    Logout
</button>
  :<Link to="/signin">
<button className='text-white flex hover:border border-white ml-3 p-2 w-48'>
<img src={user} className='h-7'/>
    Sign in
</button>
</Link>}

      </div>


    <div className='flex'>
<button onClick={() => props.setMenu("Home")} className='font-semibold text-sm'>
    Home
</button>

<button onClick={() => props.setMenu("Science")} className='ml-7 font-semibold text-sm'>
Science
</button>

<button onClick={() => props.setMenu("Movies")} className='ml-7 font-semibold text-sm'>
Movies
</button>

<button onClick={() => props.setMenu("Travel")} className='ml-7 font-semibold text-sm'>
Travel
</button>

<button onClick={() => props.setMenu("Worklife")} className='ml-7 font-semibold text-sm'>
Worklife
</button>

<button onClick={() => props.setMenu("Food")} className='ml-7 font-semibold text-sm'>
Food
</button>

<button onClick={() => props.setMenu("Technology")} className='ml-5 font-semibold text-sm'>
Technology
</button>

<button onClick={() => props.setMenu("Health")} className='ml-7 font-semibold text-sm'>
Health
</button>
        
      </div>



      <div className=' ml-40 flex p-4'>
      <img src={lens} className='h-6 '/>
        <input onChange={(e) => props.setSearch(e.target.value)} className=' flex bg-black' placeholder='Search BBC' /> 
      </div>


    </div>
  )
}

export default Navbar