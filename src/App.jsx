import Authenticate from "./Components/Authenticate";
import SignUpForm from "./Components/SignUpForm";
import { useState } from "react";

export default function App() {
  const [token,setToken] = useState(null)
  

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />
    </>
  );
}
