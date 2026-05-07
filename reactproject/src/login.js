import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const [mail, setmail] = useState("")
    const [pass, setpass] = useState("")
    const [msg, setmsg] = useState("")

    const navigate = useNavigate()

    const log = async () => {
        const data = { mail, pass }

        const result = await fetch("http://localhost:9000/api/login", {
            method: "Post",
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        })
        if (result) {
            const res = await result.json()
            if (res.statuscode == 1) {
                alert("Value stored")
                navigate("/")
            }
            else {
                alert("value not stored")
            }
        }
    }
    return (
        <>
            <div className="container cont2">

                <div className="login-box col-lg-12 p-0 ">

                    <div className=" log-left col-lg-5  ">

                        <h2 className="register">Register yourself with ShipZkart</h2>

                        <p>Login Start Shopping ~</p>

                        <img src="assets/shipzk-log-removebg-preview.png" className="img-fluid m-3" alt="..." width={"80%"}></img>

                    </div>

                    <div className="log-right col-lg-7 p-2">

                        <input placeholder="Enter Number /G-mail" type="text" onChange={(e) => setmail(e.target.value)}></input>
                        <input placeholder="Password" type="password" onChange={(e) => setpass(e.target.value)}></input>


                        <p>By continuing, you agree to ShipZkart's Terms of <span className=" policy"> Use </span>and  <span className=" policy2">Privacy Policy</span>.</p>

                        <button onClick={log}>Login</button>


                    </div>
                </div>

            </div>
        </>
    )
}
