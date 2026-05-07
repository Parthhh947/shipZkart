// export default App;
// import { Link } from "react-router-dom"
import { IDLE_BLOCKER, Link } from "react-router-dom"
import "./style.css"
import { useState } from "react"
export const Nav = () => {
    const [order, setorder] = useState(false)
    const [more, setmore] = useState(false)

    const clickorder = () => {

        if (order == false) {
            setorder(true)
        }

        else {
            setorder(false)
        }

    }

    const clickmore = () => {

        if (more == false) {
            setmore(true)
        }
        else {
            setmore(false)
        }
    }

    // const sign = () => { setpop(true) }

    return (
        <>
            <div className="container p-0 " >
                <div className="row m-0 col-lg-12 align-items-center header">

                    {/* --> */}

                    <div className=" col-lg-2 shipz" >
                        <h5>ShipZMart</h5>
                    </div>


                    <div className="col-lg-9 inpt1 " >

                        <i style={{ position: "relative", left: "40px" }} className="fa-solid fa-magnifying-glass"></i><input type="search" placeholder="Search shipZkart"></input>

                    </div>

                    <div className=" col-lg-1 wholesale" >
                        <h5 >Wholesale</h5>
                    </div>



                </div>

                {/* SEARCH-BAR */}

                <div className="row  m-0 p-0 align-items-center  header2" >

                    <div className="col-lg-1 more" >
                        <h6 onClick={clickmore}>More <i className={`fa-solid fa-angle-down ${more ? "rotate" : ""}`}></i></h6>

                        {more && (
                            <ul className="more-list">
                                <li><i className="fa-solid fa-store"></i><Link to={"/Seller-pg"}> Become a Seller </Link></li>
                                <li><i class="fa-regular fa-hand-pointer"></i><Link to={"/Category-pg"}> Choose Category </Link></li>
                                <li><i className="fa-regular fa-newspaper"></i> Advertise on ShipZKart</li>
                                <li><i className="fa-solid fa-headset"></i><Link to={"/Customer-pg"}> Customer Care </Link> </li>
                                <li><i className="fa-regular fa-bell"></i> Notification Settings </li>
                            </ul>
                        )}
                    </div>

                    <div className="col-lg-1 orders" >

                        <h6 onClick={clickorder}>Your Orders <i className={`fa-solid fa-angle-down ${order ? "rotate" : ""}`}></i></h6>

                        {order && (
                            <ul className="order-list">

                                <li><i className="fa-solid fa-basket-shopping"></i> Previous Orders </li>
                                <li><i className="fa-solid fa-cart-plus"></i> New Orders </li>
                                <li><i className="fa-regular fa-heart"></i> Wishlist </li>
                                <li><i className="fa-regular fa-thumbs-up"></i> Interests </li>

                            </ul>
                        )}
                    </div>

                    <div className="col-lg-1 cart" >
                        <h6>Cart<i className="fa-solid fa-cart-shopping"> </i></h6>
                    </div>

                    <div className="col-lg-1  signup" >
                        <h6><Link to={"/register"}> <i className="fa-regular fa-circle-user"></i>SignUp</Link></h6>
                    </div>



                    <div className="col-lg-8 text-end location" >

                        <p><i className="fa-solid fa-location-dot"></i>Location not set - <span>Select delivery location</span> </p>

                    </div>


                </div>




                {/* SIGNUP POp-up */}

                {/* {pop && (<div className="signup-box">
                    <div className="popup row col-lg-6">

                        <div className="popup-left col-lg-3 ">
                            <p>Register yourself in ShipZkart</p>
                        </div>
                        <div className="popup-box col-lg-3">

                            <h3>ShipZkart Signup</h3>

                            <input placeholder="Name" onChange={(e) => setname(e.target.value)}></input>

                            <input placeholder="G-Mail" onChange={(e) => setpass(e.target.value)}></input>

                            <input placeholder="Set password" onChange={(e) => setmail(e.target.value)}>


                            </input>
                            <button className="signbtn">Submit</button>

                            <button className="signbtn" onClick={() => setpop(false)}>Close</button>

                        </div>
                    </div>
                </div>)} */}
            </div >
        </>)
}