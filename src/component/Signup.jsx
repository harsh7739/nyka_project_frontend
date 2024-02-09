import { useState } from "react"

function Signup(){
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword] = useState("")
    const [avatar,setAvatar]=useState("")

    async function handleSubmit(){
        let obj = {username,email,password,avatar}
        try {
            let res = await fetch("https://nyka-backen-project.onrender.com/api/register",{
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

             <input type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
             <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
             <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
             <input type="text" placeholder="Avatar" value={avatar} onChange={(e)=>setAvatar(e.target.value)} />
             <input type="submit" value={"Signup"} />

        </form>
        </>
    )
}
export default Signup