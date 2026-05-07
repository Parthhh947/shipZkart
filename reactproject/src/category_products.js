import { useEffect, useState } from "react"

export const Product = () => {
    const [pname, setpname] = useState("")
    const [pdetail, setpdetail] = useState("")
    const [price, setprice] = useState("")
    const [id, setid] = useState("")
    const [file, setfile] = useState("")

    const [pro, setpro] = useState([])

    const [cat, setcat] = useState([])

    useEffect(() => {
        getcat()
        getpro()
    }, [])

    const getcat = async () => {
        const result = await fetch("http://localhost:9000/api/getpic",

            {
                method: "Get"
            }

        )

        if (result.ok) {
            const dataget = await result.json()
            if (dataget.statuscode === 1) {
                setcat(dataget.cat)


            }
            else {
                alert("prdoct info not uploaded")
            }
        }
    }

    // post product

    const submit = async () => {
        const formdata = new FormData()

        formdata.append("pname", pname)
        formdata.append("pdetail", pdetail)
        formdata.append("price", price)
        formdata.append("id", id)
        formdata.append("pic", file)

        const result = await fetch("http://localhost:9000/api/productinfo", {
            method: "POST",
            body: formdata
        })

        if (result) {
            const res = await result.json()
            if (res.statuscode === 1) {
                alert("product saved")
                getpro()
            }
            else {
                alert("product not saved")
            }
        }

    }

    // prodcut Get -->

    const getpro = async () => {
        const getresult = await fetch("http://localhost:9000/apigetdata",
            {
                method: "GET"
            }
        )
        if (getresult.ok) {

            const res = await getresult.json()
            setpro(res.product)
            alert("Your Product is fetched")
        }
        else {
            alert("Your Product is not stored")
        }
    }

    const dlt = async (id) => {

        const confirm = window.confirm("All the datawill be erased from here. You want to delete it?")
        if (confirm === true) {
            const data = await fetch(`http://localhost:9000/api/delete${id}`, {
                method: "DELETE"
            })

            if (data) {
                const result = await data.json()
                if (result.statuscode === 1) {
                    alert("Deleted")
                }

                else {
                    alert("Not deleted")
                }
            }
        }
    }

    return (
        <>
            <div className="product-info container p-0">
                <div className=" row all-products m-2">

                    <div className="col-12 ">

                        <select className="form-control" onChange={(e) => setid(e.target.value)}>
                            <option value="">ALL</option>

                            {
                                cat.map((a) =>
                                    <option value={a._id}>{a.CatName}</option>
                                )
                            }

                        </select>

                    </div>

                    <div className="  col-lg-4 col-md-3">
                        <input className="form-control" type="text" placeholder="product name" onChange={(e) => setpname(e.target.value)}></input>
                    </div>

                    <div className=" col-lg-4 col-md-3">
                        <input className="form-control" type="text" placeholder="product detail" onChange={(e) => setpdetail(e.target.value)}></input>
                    </div>

                    <div className=" col-lg-4 col-md-3">
                        <input className="form-control" type="text" placeholder="product price" onChange={(e) => setprice(e.target.value)}></input>
                    </div>

                    <div className=" col-lg-4 col-md-3">
                        <input className="form-control file-upload" type="file" onChange={(e) => setfile(e.target.files[0])} ></input>
                    </div>

                    <div className="col-md-3 col-lg-12">

                        <button onClick={submit}>Submit</button>
                    </div>
                </div>
            </div>

            <div className="table-responsive container">
                <table className="listing-table table table-striped">

                    <tr>

                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Product Detail</th>
                        <th>Product Price</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>


                    {
                        pro.map((a, index) =>

                            < tr key={index}>


                                <td> <img className="product-img" src={`/uploads/${a.Image}`}></img> </td>
                                <td>{a.ProductName}</td>
                                <td>{a.ProductDetail}</td>
                                <td>{a.Productprice}</td>
                                <td><i onClick={() => dlt(a._id)} class="fa-regular fa-trash-can"></i></td>
                                <td><i class="fa-solid fa-pen-to-square"></i></td>
                            </tr>)
                    }
                </table>
            </div>
        </>
    )
}