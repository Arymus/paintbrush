import { useState } from 'react'
import './index.css'

function App() {
  const flexColCenter = "flex flex-col align-center";
  const inputStyles = "placeholder:text-center text-center self-center w-40";
  return (
    <>
      <header>
        <h1 className="font-paintbrush text-7xl text-center m-10">Paintbrush</h1>
      </header>

      <main className="flex justify-center">
	<div className={flexColCenter + "w-[50vw]"}>
	  <form method="POST" className={flexColCenter}>
	    <div className={flexColCenter + "m-10"}>
	      <input type="text" placeholder="Email" className={inputStyles} />
	      <input type="password" placeholder="Password" className={inputStyles} />
	    </div>
	    <input type="submit" value="Sign in" className="m-5 text-3xl text-center  w-50 font-paintbrush" />
	  </form>

	  <div id="forgot-login" className="flex flex-row justify-evenly">
	    <a href="" className="font-paintbrush">Forgot password?</a>
	    <a href="" className="font-paintbrush">Login</a>
	  </div>
	</div>
      </main>
    </>
  )
}

export default App
