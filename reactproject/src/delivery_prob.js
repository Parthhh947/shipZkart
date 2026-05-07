import { useState } from "react"

export const Delivery = () => {

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [state, setstate] = useState("")
    const [city, setcity] = useState("")
    const [num, setnum] = useState("")
    const [prob, setprob] = useState("")

    const problemSubmit = async () => {
        const data = { fname, lname, state, city, num, prob }
        const result = await fetch("http://localhost:9000/api/problem", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        })

        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                alert("data saved")
            }
            else {
                alert("data not saved")
            }
        }
    }

    return (
        <>
            <div className="inq-form">
                <div className="row">
                    <div className="form-inpts m-1 p-5 col-lg-6">

                        <p>Share Your Problem with us. Our team will reach out soon to you !</p>

                        <div className="row">

                            <div className="col-lg-6">
                                <input className="form-control " type="text" placeholder="First Name" onChange={(e) => setfname(e.target.value)}></input>
                            </div>

                            <div className=" col-lg-6">
                                <input className="form-control " type="text" placeholder="Last Name" onChange={(e) => setlname(e.target.value)}></input>
                            </div>

                            <div className="col-lg-6">
                                <input className="form-control " type="text" placeholder="State" onChange={(e) => setstate(e.target.value)}></input>
                            </div>

                            <div className="col-lg-6">
                                <input className="form-control " type="text" placeholder="City" onChange={(e) => setcity(e.target.value)}></input>
                            </div>

                            <div className="col-lg-12">
                                <input className="form-control " type="number" placeholder="Number" onChange={(e) => setnum(e.target.value)}></input>
                            </div>

                            <div className="col-lg-12">
                                <input className="form-control " type="text" placeholder="Tell us about your Problem" style={{ height: "50px" }} onChange={(e) => setprob(e.target.value)}></input>
                            </div>

                            <div>
                                <button onClick={problemSubmit} className="col-lg-2 mt-3">Submit</button>
                            </div>

                        </div>
                    </div>


                    <div className="col-lg-6" style={{ border: "1px solid red" }}>
                        hello
                    </div>

                </div>

            </div>
        </>
    )
}