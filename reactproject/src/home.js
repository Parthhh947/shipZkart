import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Homepg = () => {

    const [index, setindex] = useState(0)

    const images = [
        "../assets/motherday.jpg",
        "../assets/bestoff.jpeg"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setindex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="container list">
                <div className="col-lg-12 ">
                    <ul className="nav-menu">

                        <li className="nav-item">
                            For You
                        </li>

                        <li className="nav-item">
                            <Link to={"/beautyproducts"}> Beauty</Link>
                        </li>

                        <li className="nav-item">
                            Accesories
                        </li>

                        <li className="nav-item">
                            Fashion
                        </li>

                        <li className="nav-item">
                            Fitness
                        </li>

                        <li className="nav-item">
                            Mobile
                        </li>

                        <li className="nav-item">
                            Cycles
                        </li>

                        <li className="nav-item">
                            Watches
                        </li>

                        <li className="nav-item">
                            Appliences
                        </li>

                        <li className="nav-item">
                            Food
                        </li>

                        <li className="nav-item">
                            Toys
                        </li>

                        <li className="nav-item">
                            Furniture
                        </li>

                        <li className="nav-item">
                            Books
                        </li>

                    </ul>
                </div>

            </div>

            {/* SLIDERS */}

            <div className="container-fluid cat-home" >
                <div className="slider ">
                    <img src={images[index]} alt="images.."></img>
                </div>

                <div className="container-fluid item-container  p-3 d-flex justify-content-center">

                    <div className="row item-row col-lg-12 ">

                        {/* IMAGES */}

                        <div className="cat-imgs col-lg-3">
                            <h5>Check New Arrivals</h5>
                            <img className="game-img" src="../assets/game.jpg" alt=".."></img>
                            <h6>Shop gaming</h6>
                        </div>

                        <div className="cat-imgs col-lg-2">
                            <h5>Check New Arrivals</h5>
                           
                            <img src="../assets/books.jpeg" alt=".."></img>
                            <p>Shop gaming</p>

                            <img src="../assets/kitchenset.jpeg" alt=".."></img>
                            <p>Shop gaming</p>

                        </div>

                        <div className="cat-imgs col-lg-2">
                            <h5>Check New Arrivals</h5>
                           
                            <img src="../assets/tshirt.jpeg" alt=".."></img>
                            <p>Shop gaming</p>

                            <img src="../assets/electronic.jpeg" alt=".."></img>
                            <p>Shop gaming</p>

                        </div>

                        <div className="cat-imgs col-lg-2">
                            <h5>Check New Arrivals</h5>
                          
                            <img src="../assets/laptop.jpeg" alt=".."></img>
                            <p>Shop gaming</p>

                            <img src="../assets/c2.jpeg" alt=".."></img>
                            <p>Shop gaming</p>

                        </div>

                        <div className="cat-imgs col-lg-2">
                            <h5>Check New Arrivals</h5>
                            
                            <img src="../assets/ad2.jpeg" alt=".."></img>
                            <p>Shop gaming</p>

                            <img src="../assets/ad2.jpeg" alt=".."></img>
                            <p>Shop gaming</p>
                        </div>



                    </div>


                </div>

            </div>

        </>
    )
}