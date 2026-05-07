import { Link } from "react-router-dom"

export const Customer = () => {
    return (
        <>
            <div className="container cust-care" >
                <div className="row col-12 m-2 problems-sec d-flex " >

                    <p>ShipZkart Help Center | Welcome to ShipZkart Customer Service
                        <br></br> <span> The ShipZkart Help Centre page lists out various types of <span style={{ color: "blue" }}> Issues</span> or<span style={{ color: "blue" }}> Problems</span> that you may have faced yet.</span></p>

                    <div className="col-12 d-flex justify-content-center row mt-5 ">


                            <Link to={"/delivery-prob-pg"} className=" col-lg-4 col-md-2 col-12 d-flex p-1">
                        <div className="problem-card">
                                <img className="img-fluid" src="../assets/shipzk-log-removebg-preview.png"></img>
                                <p> A delivery , order or return </p>
                        </div>
                            </Link>

                            <Link to={"/payment-prob"} className=" col-lg-4 col-md-2 col-12 d-flex p-1">
                        <div className="problem-card">
                                <img className="img-fluid" src="../assets/shipzk-log-removebg-preview.png"></img>
                                <p>Payment Related</p>
                        </div>
                            </Link>

                            <Link to={"/policy-guidlines-prob"} className="col-lg-4 col-md-2 col-12 d-flex p-1">
                        <div className="problem-card " >
                                <img className="img-fluid" src="../assets/shipzk-log-removebg-preview.png"></img>
                                <p>Policy and Guidlines</p>
                        </div>
                            </Link>

                            <Link to={"/Address-Security-prob"} className="col-lg-4 col-md-2 col-6 d-flex p-1">
                        <div className="problem-card ">
                                <img className="img-fluid" src="../assets/shipzk-log-removebg-preview.png"></img>
                                <p>Address, Security and Privacy</p>
                        </div>
                            </Link>

                            <Link to={"/Shipcoins-prob"} className="col-lg-4 col-md-2 col-6 d-flex p-1">
                        <div className="problem-card ">
                                <img className="img-fluid" src="../assets/shipzk-log-removebg-preview.png"></img>
                                <p>ShipCoins</p>
                        </div>
                            </Link>

                            <Link to={"/Buy-sell-prob"} className="col-lg-4 col-md-2 col-6 d-flex p-1">
                        <div className="problem-card ">
                                <img className="img-fluid" src="../assets/shipzk-log-removebg-preview.png"></img>
                                <p>Buying / Selling on ShipZkart</p>
                        </div>
                            </Link>

                            <Link to={"/Communication-support-prob"} className="col-lg-4 col-md-2 col-6 d-flex p-1">
                        <div className="problem-card ">
                                <img className="img-fluid" src="../assets/shipzk-log-removebg-preview.png"></img>
                                <p>Communication and Support</p>
                        </div>
                            </Link>

                            <Link to={"/Report-something-prob"} className="col-lg-4 col-md-2 col-6 d-flex p-1">
                        <div className="problem-card ">
                                <img className="img-fluid" src="../assets/shipzk-log-removebg-preview.png"></img>
                                <p> Report Something Suspecious</p>
                        </div>
                            </Link>

                            <Link to={"/Something-else-prob"} className="col-lg-4 col-md-2 col-6 d-flex p-1">
                        <div className="problem-card ">
                                <img className="img-fluid" src="../assets/shipzk-log-removebg-preview.png"></img>
                                <p>Something else</p>
                        </div>
                            </Link>


                    </div>
                </div>

            </div>
        </>
    )
}