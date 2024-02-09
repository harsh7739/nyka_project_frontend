import { useState } from "react"

function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")
  

    async function handleSubmit(){
        let obj = {email,password}
        try {
            let res = await fetch("https://nyka-backen-project.onrender.com/api/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            })
            res=await res.json()
            alert("Signup successfully")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
        <form action="" onSubmit={handleSubmit}>
             <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
             <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
             
             <input type="submit" value={"Signup"} />

        </form>
        </>
    )
}
export default Login