import { Route, Routes } from "react-router-dom"
import { Homepg } from "./home"
import { Sign } from "./signup"
import { Login } from "./login"
import { Beauty } from "./beauty"
import { Category } from "./category"
import { Seller } from "./seller"
import { Product } from "./category_products"
import { Customer } from "./customer_care"
import { Delivery } from "./delivery_prob"
import { Payment } from "./payment_prob"
import { Policy } from "./policy_prob"
import { Address } from "./address_prob"
import { Shipcoin } from "./shipcoin_prob"
import { Buysell } from "./buysell_prob"
import { Support } from "./support_prob"
import { Report } from "./report_prob"
import { Else } from "./smelse_prob"
import { Example } from "./example"
import { Issue } from "./issue"

export const Siteroutes = () => {
    return (
        <>
            <Routes>

                <Route path="/" element={<Homepg />}></Route>
                <Route path="/register" element={<Sign />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/beautyproducts" element={<Beauty />} ></Route>
                <Route path="/category-pg" element={<Category />}></Route>
                <Route path="/seller-pg" element={<Seller />}></Route>
                <Route path="/product-pg" element={<Product />}></Route>
       
            {/*CUSTOMER SERVICE ----> */}
       
                <Route path="/customer-pg" element={<Customer />}></Route>
                <Route path="/delivery-prob-pg" element={<Delivery/>}></Route>
                <Route path="/payment-prob" element={<Payment/>}></Route>
                <Route path="/policy-guidlines-prob" element={<Policy/>}></Route>
                <Route path="/Address-Security-prob" element={<Address/>}></Route>
                <Route path="/Shipcoins-prob" element={<Shipcoin/>}></Route>
                <Route path="/Buy-Sell-prob" element={<Buysell/>}></Route>
                <Route path="/Communication-support-prob" element={<Support/>}></Route>
                <Route path="/Report-something-prob" element={<Report/>}></Route>
                <Route path="/Something-else-prob" element={<Else/>}></Route>

                <Route path="/issues" element={<Issue/>}></Route>

                <Route path="/examples" element={<Example/>}></Route>
           
            </Routes>
        </>
    )
}