export const Example = () => {
    return (
        <>
            <div className="container mt-4">
                <div className="row">

                    {/* LEFT - IMAGE */}
                    <div className="col-md-4">
                        <img
                            src={""}
                            className="img-fluid border"
                            alt="product"
                        />
                    </div>

                    {/* CENTER - DETAILS */}
                    <div className="col-md-5">
                        
                        <p className="text-success">⭐⭐⭐⭐☆ (120 ratings)</p>

                        <h3>₹ </h3>

                        <p className="text-danger">Limited time deal</p>

                        <ul>
                            <li>High Quality Product</li>
                            <li>Durable Build</li>
                            <li>Fast Delivery</li>
                            <li>1 Year Warranty</li>
                        </ul>
                    </div>

                    {/* RIGHT - BUY BOX */}
                    <div className="col-md-3 border p-3">
                        <h4>₹ </h4>

                        <p>FREE Delivery</p>

                        <button className="btn btn-warning w-100 mb-2">
                            Add to Cart
                        </button>

                        <button className="btn btn-primary w-100">
                            Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}
