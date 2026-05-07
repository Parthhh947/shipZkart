export const Seller = () => {
    return (
        <>
            <div className="p-5 seller-pg col-lg-12 container ">

                <div className="seller-text d-flex justify-content-between" >

                    <h3 className="">Sell with ShipZMart </h3>

                    <button className="seller-btn">Sign Up</button>

                </div>

                <div className="seller-ac mt-5 d-flex justify-content-between" >

                    <div>
                        <h1> Create a ShipZMart <br></br> Seller account </h1>
                        <button className="seller-btn2 mt-4">Start Selling</button>
                    </div>

                    <div className="sell-img">

                        <img src="../assets/profit-img.jpeg" alt=".."></img>

                    </div>
                </div>

                {/* SELLER SECTION */}

                <div className="sell-section d-flex justify-content-between p-1 col-lg-12" style={{ marginTop: "10%" }} >

                    {/* SECTION 1 */}

                    <div className="sell-sec1 col-lg-4 " >
                        <h6>Sell on ShipZMart</h6>

                        <div className="section1 mt-4">

                            <div className="setion1-points ">
                                <p >Build Your Business Online <br></br>
                                    <span>Sell to Retailers ,Wholesalers and Manufacturers</span>
                                </p>

                                <p >First Mover Advantage <br></br>
                                    <span>Target all type of customers</span>
                                </p>

                                <p >Smatrt Seller DashBoard <br></br>
                                    <span>View Orders, lead & performance easily</span>
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* SECTION 2 */}

                    <div className="sell-sec2 col-lg-7 m" >
                        <h6>Get a Seller account in 3 simple steps</h6>

                        <div className="section2 mt-4">

                            <div className="step-card ">
                                <i className="mb-2 fa-regular fa-pen-to-square"></i>
                                <p >Create Account <br></br>
                                    <span>Add your Name, Gmail and Phone Number  to get started</span>
                                </p>

                            </div>
                            <div className="step-card">
                                <i className="mb-2 fa-solid fa-book-bookmark"></i>
                                <p >Business Details <br></br>
                                    <span>Add name, GST ,address & e-mail of your business, company/ store.</span>
                                </p>
                            </div>

                            <div className="step-card ">
                                <i className="mb-2 fa-solid fa-dolly"></i>
                                <p >Product/Services<br></br>
                                    <span>Minimum 1 product/services needed for your Seller listing page.</span>
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
                {/* Section 3 */}
                <div className="section3 col-lg-12 d-flex justify-content-center  p-0">

                    <div className="section-item">
                        <i class="fa-solid fa-person-running"></i>
                        <p>Get the First Mover Advantage</p>
                    </div>

                    <div className="section-item">
                        <i class="fa-solid fa-piggy-bank"></i>
                        <p>Low cost of doing business</p>
                    </div>

                    <div className="section-item">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                        <p>Secure and regular payments </p>
                    </div>

                    <div className="section-item">
                        <i class="fa-solid fa-cubes"></i>
                        <p>Access to Unlimited Products and Services</p>
                    </div>

                    <div className="section-item-last">
                        <i class="fa-solid fa-headset"></i>
                        <p>One Click Seller Support</p>
                    </div>

                </div>

                {/* SECTION 4 */}

                <div className="container-fluid section4 col-lg-12">
                    <h2><i class="fa-solid fa-coins"></i> New Seller Benifit</h2>
                    <div className="d-flex">
                        <div className="ref-sec col-lg-8">

                            <p>Sellers can now get further benefits on multi-unit purchases, enjoying up to 90%+ savings in fees on additional units sold. By creating promotions like "Buy 2, Get 10% Off", sellers can maximize their savings under the new fee structure.
                                Create promotions here</p>

                            <p>Sellers on Amazon Bazaar will continue to enjoy zero referral fees on numerous products across a wide spectrum of categories, and can now benefit from reduction of up to ₹18 in weight handling fees!</p>

                            <button>Know More</button>
                            <div className="d-flex m-5">
                                <div className="commision">
                                    <p>₹18 <br></br>
                                        Less weight handling fees for shipments up to 1 kg</p>
                                </div>

                                <div className="commision">
                                    <p>₹15<br></br>
                                        Less weight handling fees for heavier items.</p>

                                </div>

                                <div className="commision">
                                    <p>₹20<br></br>
                                        Saved on refunds of products priced under ₹250.</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ref-fee d-flex justify-content-center">
                            <img src="../assets/ref-fee-removebg-preview.png"></img>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}