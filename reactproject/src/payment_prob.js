import { Link } from "react-router-dom"

export const Payment = () => {
    return (
        <>
            <div className="container-fluid payment d-flex justify-content-center">
                <div className="payment-prob row col-12 justify-content-center mt-2">

                    <div className="p1 col-lg-2 p-2 col-3" >
                        What do you need help with?
                    </div>
                    <div className="p2 col-lg-2 col-3  p-2" >
                        What seems to be the issue?
                    </div>
                    <div className="p3 col-lg-2 col-3 p-2" >
                        Get Answer
                    </div>

                    <div className="help mt-5 mb-4 col-12">
                        <p> Need assistance with anything else?</p>
                    </div>

                    <div className="issue-define m-2 d-flex container col-lg-8 ">

                        <div className="pay-img m-5 ">

                            <img src="../assets/payment.png" alt=".." ></img>
                            <p>Payemnt ,charges  <br></br> or other Issues</p>

                        </div>

                        <div className="line m-1"></div>

                        <div className="issue-text m-4">

                            <div className="back">
                                <h6> <i class="fa-solid fa-angle-left"></i>Back</h6>
                            </div>

                            <h4>Let us know what you need help with</h4>

                            <div className="issue-options row m-0 mt-4" >

                                <Link to={"/issues?id=1"} className="col-lg-4 p-2  ">
                                    <div className="issue-card ">
                                        Update payment methods
                                    </div>
                                </Link>

                                <Link to={"/issues?id=2"} className="col-lg-4 p-2 ">
                                    <div className="issue-card  ">
                                        Payment declined
                                    </div>
                                </Link>

                                <Link to={"/issues?id=3"} className="col-lg-4 p-2 ">
                                    <div className="issue-card  ">
                                        Gift Card
                                    </div>
                                </Link>

                                <Link to={"/issues?id=4"} className="col-lg-4 p-2 ">
                                    <div className="issue-card" >
                                        Unknown charges
                                    </div>
                                </Link>

                                <Link to={"/issues?id=5"} className="col-lg-4 p-2 ">
                                    <div className="issue-card  " >
                                        Transaction Issues

                                    </div>
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}