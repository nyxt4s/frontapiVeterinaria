import { useState } from "react";

export const Login = () => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    console.log(firstname + lastname);
   
    return (
        <section className="bg-teal-500 mt-8 ">
            <form className="mt-8 h-auto bg-slate-200 w-auto" action="" method="post">
                <div className="m-4">
                    <label>username</label>
                    <input name="firstname" onChange={e => setFirstname(e.target.value)} value={firstname}/>
                </div>
                <div className="m-4">
                    <label>password</label>
                    <input name="lastname" onChange={e => setLastname(e.target.value)} value={lastname}/>
                </div>
                <button className="rounded-md bg-slate-500 w-auto max-w-sm lg: w-40">Ingresar</button>
            </form>
        </section>
  )
}
