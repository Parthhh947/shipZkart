import { useState } from "react"
import { Link } from "react-router-dom"

export const Sign = () => {
    const [name, setname] = useState("")
    const [mail, setmail] = useState("")
    const [num, setnum] = useState("")
    const [pass, setpass] = useState("")
    const [cpass, setcpass] = useState("")
    const [msg, setmsg] = useState("")

    const sign = async () => {

        if (pass == cpass) {
            const data = { name, mail, num, pass, cpass }

            const result = await fetch("http://localhost:9000/api/signup", {
                method: "Post",
                body: JSON.stringify(data),
                headers: { "content-type": "application/json" }
            })
            if (result) {
                const res = await result.json()
                if (res.statuscode == 1) {
                    alert("Value stored")
                }
                else {
                    alert("value not stored")
                }
            }
        }

        else {
            setmsg("Confirm password does not match")
        }
    }
    return (
        <>
            <div className="container cont">

                <div className="signup-box col-lg-12 p-0 ">

                    <div className=" sign-left col-lg-5  ">

                        <h2 className="register">Register yourself with ShipZkart</h2>

                        <p>Fill Your Info To Start Shopping ~</p>

                        <img src="assets/element-removebg-preview.png" className="img-fluid mt-5" alt="..."></img>

                    </div>

                    <div className="sign-right col-lg-7 p-2">

                        <input placeholder="Name" type="text" onChange={(e) => setname(e.target.value)}></input>
                        <input placeholder="G-mail" type="email" onChange={(e) => setmail(e.target.value)}></input>
                        <input placeholder="Number" type="number" onChange={(e) => setnum(e.target.value)}></input>
                        <input placeholder="Password" type="password" onChange={(e) => setpass(e.target.value)}></input>
                        <input placeholder="Confirm Password" type="password" onChange={(e) => setcpass(e.target.value)}></input>

                        <p className="pass-match">{msg}</p>

                        <p>By continuing, you agree to ShipZkart's Terms of <span className=" policy"> Use </span>and  <span className=" policy">Privacy Policy</span>.</p>

                        <button onClick={sign}>Signup</button>

                        <p className="login-text">Already a User? <span className="log-here"><Link to={"/login"}> Login Here.</Link> </span> </p>

                    </div>
                </div>

            </div>
        </>
    )
}