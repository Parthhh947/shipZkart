import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const Issue = () => {
    const [issuename, setissuename] = useState("")
    const [i1, seti1] = useState("")
    const [i2, seti2] = useState("")
    const [i3, seti3] = useState("")
    const [i4, seti4] = useState("")
    const [i5, seti5] = useState("")

    const [params] = useSearchParams()

    const id = params.get("id")

    useEffect(() => {
        if (id == "1") {
            setissuename("Update Payment methods")

            seti1("Add new payment method")
            seti2("Update existing method")
            seti3("Remove / delete payment method")
            seti4("Verification issues")
            seti5("Security related")
            
        }
        
        else if (id == "2") {
            setissuename("Payment Declined")
            
            seti1("Cancelled Order but Charged")
            seti2("Subscription / Auto Debit")
            seti3("Payment stuck / pending")
            seti4("Unknown Charge")
            seti5("Duplicate Charge")

        }
        else if (id == "3") {
            setissuename("Gift Card")


            seti1("Can’t redeem gift card")
            seti2("Gift card not working at checkout")
            seti3("Didn’t receive gift card")
            seti4("Unable to use Gift Card")
            seti5("Gift card expired")

        }
        else if (id == "4") {
            setissuename("Unknown charges")


            seti1("I don’t recognize this charge")
            seti2("Cancelled order but still charged")
            seti3("Bank or extra charges")
            seti4("Refund amount is incorrect/ Bank or extra charges")
            seti5("Payment deducted but order not confirmed")

        }
        else if (id == "5") {
            setissuename("Transaction Issues")
            
            seti1("Payment failed")
            seti2("card/UPI problems")
            seti3("Error during payment")
            seti4("Payment successful but order not showing")
            seti5("Transaction declined")

        }
    })
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
                                <h6><i class="fa-solid fa-angle-left"></i>Back</h6>
                            </div>

                            <h4>{issuename}</h4>

                            <div className="issue-options row m-0 mt-4" >

                                <div className="issue-card new-issues col-lg-3 p-3 m-2 ">
                                    {i1}
                                </div>

                                <div className="issue-card new-issues col-lg-3 p-3 m-2 ">
                                    {i2}

                                </div>

                                <div className="issue-card new-issues col-lg-3 p-3 m-2 ">
                                    {i3}

                                </div>

                                <div className="issue-card new-issues col-lg-3 p-3 m-2 " >
                                    {i4}

                                </div>

                                <div className="issue-card new-issues col-lg-3 p-3 m-2 " >
                                    {i5}

                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}