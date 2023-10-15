import React from "react";
import { useState } from "react";

export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const isUsernameValid = username.length === 8;

    async function handleSubmit(event){
        event.preventDefault();
        if (!isUsernameValid) {
            setError("Username must be eight characters in length.");
                return;}
        
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
            const result = await response.json();
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
            {!isUsernameValid && <p>Username must be eight characters in length.</p>}
            <label>
                Password: {''}<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </label>
            <button>Submit</button>
        </form>
    </div> 
  )}
    