import React,{useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const[input,setInput]=useState('')
  const history = useNavigate()
  const handleChange = (e) =>
    {
        setInput(e.target.value)
    }
  

  const submitHandler = () =>{

fetch('/register',{
  method: 'POST',
  headers: {
    'Content-Type' : 'application/json',
  },
  body: JSON.stringify({input})
})
.then((response)=>response.json())
.then((data)=>{
  console.log("user Name is Stored Successfully",data.message)
  history.push('/quiz')
})
.catch((err)=>{
  console.log("Error Occured",err)
})
  }
  return (
    <div>
      <header className='title'>
      <h1 className="header">Quiz</h1>
      </header>
      <div className="app" ></div>
      <form className='start-cover' >
        <label className='user_name'>Enter Name: </label>
        <input
        className='user_inputBox' 
        type="text"
        onChange={handleChange}
        maxLength={15}
        ></input>
<p>{input}</p>
     { input.length<=0  ? '' :
       <Link to='/quiz' className='link' ><button 
       onClick={submitHandler}
       className='button'>Start </button></Link>}
      </form>
    </div>
  )

}
export default StartPage
