import { useEffect, useState } from "react"

export const Category = () => {
    const [catname, setcatname] = useState("")
    const [pic, setpic] = useState("")
    const [allcat, setallcat] = useState([])

    useEffect(() => {
        getcat()
    }, [])

    const add = async () => {
        const formdata = new FormData()

        formdata.append("catname", catname)
        formdata.append("pic", pic)

        const result = await fetch("http://localhost:9000/api/addcat",
            {
                method: "Post",
                body: formdata
            }
        )

        const res = await result.json()
        if (res.statuscode == 1) {
            alert("Value stored")
        }

        else {
            alert("value not stored")
        }

    }

    // get

    const getcat = async () => {
        const result = await fetch("http://localhost:9000/api/getpic",
            {
                method: "get"
            }
        )

        if (result.ok) {
            const dataget = await result.json()
            if (dataget.statuscode == 1) {

                setallcat(dataget.cat)


                alert("Api working")

            }
            else {
                alert("api not working")
            }
        }
    }

                

    return (
        <>
            <div className="cat-pg container-fluid p-2">
                <div className="main-cat col-12 mb-5">

                    <h1>Add Your Category</h1>

                    <div className="cat-inpts ">
                        <input placeholder="Choose Your Category" type="cattegory" onChange={(e) => setcatname(e.target.value)}></input>

                        <input className="file-choose" type="file" onChange={(e) => setpic(e.target.files[0])}></input>
                        <button onClick={add}>Add</button>
                    </div>

                </div>

                <div className="all-cat col-12 container">

                    <h2>All Categories</h2>

                    <div className="row mt-5">

                        {
                            allcat.map((a, index) =>

                                <div className="col-3" key={index}>

                                    <img className="cat-img"  src={`/uploads/${a.Pic}`} alt="..."></img>
                                    <p>{a.CatName}</p>

                                </div>

                            )
                        }

                    </div>

                </div>
            </div>
        </>
    )
}