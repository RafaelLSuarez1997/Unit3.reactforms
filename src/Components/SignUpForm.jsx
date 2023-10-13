import React from "react";
import { useState } from "react";

export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    async function handleSubmit(event){
        event.preventDefault();
        console.log("hello")
        try{
            const addSignUp = {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
                ,body:JSON.stringify({
                    username: username,
                    password: password
                })
            }
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", addSignUp)
            const result = response.json();
            console.log(result)
            setToken(result.token)
        }
        catch(err) {
            setError(error.message);
        }
    }

    return(
    <div>
        <h2>Sign Up!</h2>
        {error&& <p>{error}</p>}
        <form onSubmit={handleSubmit}> 
            <label>
                Username: {''}<input value={username} onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <label>
                Password: {''}<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
    </div> 
  )}
    